import { cartModel } from "../models/cartModel.js";

export const syncCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { cartItems } = req.body;

    const cart = await cartModel.getOrCreateCart(userId);

    for (const [productId, quantity] of Object.entries(cartItems)) {
      if (quantity > 0) {
        await cartModel.addItemToCart(cart.id, productId, quantity);
      }
    }

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to sync cart" });
  }
};

export const getUserCart = async (req, res) => {
  // console.log(req.user);
  try {
    const cart = await cartModel.getOrCreateCart(req.user.id);
    // console.log(cart);
    const items = await cartModel.getCartItems(cart.id);
    // console.log(items);

    res.status(200).json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch cart" });
  }
};

export const updateItem = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    // console.log(req.user.id);
    const cart = await cartModel.getOrCreateCart(req.user.id);
    // console.log(cart);

    const data = await cartModel.updateCartItem(cart.id, productId, quantity);

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to update item" });
  }
};

export const removeItem = async (req, res) => {
  try {
    const { productId } = req.params;
    const cart = await cartModel.getOrCreateCart(req.user.id);

    await cartModel.removeCartItem(cart.id, productId);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to remove item" });
  }
};
