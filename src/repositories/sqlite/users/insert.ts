import db from "../database.js";

interface InsertRow {
  id: number;
  name: string;
  phone: number;
  category: number;
}
async function insert({ id, name, phone, category }: InsertRow): Promise<void> {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO users (id, name, phone,category) VALUES (?, ?, ?, ?)`,
      [id, name, phone, category],
      function (err) {
        if (err) {
          console.error("Error inserting user:", err.message);
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
}

export { insert as insertUser };
