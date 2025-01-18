import db from "../database.js";

export default async function usersTable() {
  return new Promise((resolve) => {
    db.run(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone NUMBER UNIQUE NOT NULL,
        category NUMBER NOT NULL
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
