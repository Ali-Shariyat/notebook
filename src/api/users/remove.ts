import db from "../database.js";

interface RemoveRow {
  id: number;
  name: string;
  phone: number;
}
async function remove({ id }: RemoveRow): Promise<any> {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM users WHERE id = ?`, [id], function (err) {
      if (err) {
        reject(err);
      } else {
        resolve("success"); // `this.changes` indicates the number of rows affected.
      }
    });
  });
}

export { remove as removeUser };
