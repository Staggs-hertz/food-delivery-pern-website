import { pool } from "../config/db.js";

export const ProductModel = {
  getProducts: async (filters) => {
    const { category, id } = filters;

    let query = `SELECT
    p.id,
    p.name,
    p.description,
    p.price,
    p.image_url,
    c.name AS category
    FROM products p
    JOIN categories c
    ON p.category_id = c.id`;

    const values = [];

    if (category) {
      query += ` WHERE c.name = $1`;
      values.push(category);
    }
    if (id) {
      query += ` WHERE p.id = $1`;
      values.push(id);
    }

    const result = await pool.query(query, values);
    return result.rows;
  },

  postProducts: async (props) => {
    const { name, description, price, image_url, category_id } = props;

    const query = `INSERT INTO products(name, description, price, image_url, category_id)
    VALUES ($1, $2, $3, $4, $5)`;

    const values = [name, description, price, image_url, category_id];
    const result = await pool.query(query, values);
    return result.rows[0];
  },
};
