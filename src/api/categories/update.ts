import db from "../database.js";

interface UpdateRow {
  name: string;
  phone: number;
  id: number;
  category: number;
}

async function update({ name, id }: UpdateRow): Promise<any> {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE categories SET name = ? WHERE id = ?`,
      [name, id],
      function (err) {
        if (err) {
          reject();
        } else {
          resolve("successfully edited");
        }
      }
    );
  });
}

export { update as updateCategory };
