import { pool } from "../config/db.js";

export const UserModel = {
  //create a new user
  createUser: async (name, email, hashedPassword, role = "user") => {
    const query = `INSERT 
    INTO users (name, email, password, role)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `;
    const values = [name, email, hashedPassword, role];

    const { rows } = await pool.query(query, values);
    return rows[0];
  },

  //Find user by email (for login)
  findByEmail: async (email) => {
    const query = `SELECT * FROM users WHERE email = $1`;

    const { rows } = await pool.query(query, [email]);
    return rows[0];
  },

  //Find user by id (for auth middleware)
  findById: async (id) => {
    const query = `SELECT id, name, email, role
    FROM users WHERE id = $1`;

    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },
};
