import db from "../database.js";

interface InsertRow {
  id: number;
  name: string;
}
async function insert({ id, name }: InsertRow): Promise<void> {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO categories (id, name) VALUES (?, ?)`,
      [id, name],
      function (err) {
        if (err) {
          console.error("Error inserting user:", err.message);
          reject(err);
        } else {
          // console.log(`User inserted with ID: ${this.lastID}`);
          resolve();
        }
      }
    );
  });
}

export { insert as insertCategory };
