--SAMPLE DATA TO INSERT INTO categories table
INSERT INTO categories (name)
VALUES ('salad'), ('rolls'), ('desserts'), ('sandwich'), ('cake'), ('pure-veg'), ('pasta'), ('noodles');


-- SAMPLE DATA TO INSERT INTO products table
INSERT INTO products (name, description, price, image_url, category_id)
VALUES
  ('Chocolate Cake', 'Rich chocolate layer cake', 120.00, '/uploads/choc_cake.jpg', 5),
  ('Fruit Salad', 'Fresh seasonal fruits', 45.00, '/uploads/fruit_salad.jpg', 1),
  ('Fried Noodles', 'Spicy chicken noodles', 80.00, '/uploads/noodles.jpg', 8),
  ('Veg Noodles', 'Yummy veg noodles', 15.00, '/uploads/veg_noodles.jpg', 8)
ON CONFLICT DO NOTHING;
