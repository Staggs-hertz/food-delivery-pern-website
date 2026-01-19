import { pool } from "../config/db.js";

export const cartModel = {
  // To get or create a cart
  getOrCreateCart: async (user_id) => {
    const result = await pool.query(
      `INSERT INTO carts (user_id)
      VALUES ($1)
      ON CONFLICT (user_id)
      DO UPDATE SET updated_at = now()
      RETURNING *`,
      [user_id]
    );

    return result.rows[0];
  },

  // To add or increment a cart item
  addItemToCart: async (cartId, productId, quantity) => {
    await pool.query(
      `INSERT INTO cart_items (cart_id, product_id, quantity)
      VALUES ($1, $2, $3)
      ON CONFLICT (cart_id, product_id)
      DO UPDATE SET quantity = cart_items.quantity + EXCLUDED.quantity`,
      [cartId, productId, quantity]
    );
  },

  // Update quantity (used for add and reduce buttons)
  updateCartItem: async (cartId, productId, quantity) => {
    if (quantity <= 0) {
      await removeCartItem(cartId, productId);
      return;
    }

    const result = await pool.query(
      `UPDATE cart_items
      SET quantity = $1, updated_at = now()
      WHERE cart_id = $2
      AND product_id = $3
      RETURNING *`,
      [quantity, cartId, productId]
    );

    return result.rows;
  },

  // Remove product completely
  removeCartItem: async (cartId, productId) => {
    await pool.query(
      `DELETE FROM cart_items
      WHERE cart_id = $1
      AND product_id = $2`,
      [cartId, productId]
    );
  },

  // Get all items in the cart
  getCartItems: async (cartId) => {
    const result = await pool.query(
      `SELECT
      ci.product_id,
      ci.quantity,
      p.name,
      p.price,
      p.image_url
      FROM cart_items ci
      JOIN products p ON p.id = ci.product_id
      WHERE ci.cart_id = $1`,
      [cartId]
    );

    return result.rows;
  },
};
