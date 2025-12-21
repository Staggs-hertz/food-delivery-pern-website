import app from "./app.js";
import { pool } from "./config/db.js";

const PORT = process.env.PORT;

pool
  .connect()
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB connection failed:", err);
  });
