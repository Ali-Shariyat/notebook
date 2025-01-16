import db from "../database.js";

export default async function categoriesTable() {
  return new Promise((resolve) => {
    db.run(
      `CREATE TABLE IF NOT EXISTS categories (
        id INTEGER NOT NULL,
        name TEXT NOT NULL
      ) `,
      (err) => {
        if (err) {
          console.error("Error creating table:", err.message);
        } else {
          resolve("yeah loaded");
        }
      }
    );
  });
}
