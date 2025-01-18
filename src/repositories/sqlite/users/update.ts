import db from "../database.js";

interface UpdateRow {
  name: string;
  phone: number;
  id: number;
  category: number;
}

async function update({ name, phone, category, id }: UpdateRow): Promise<any> {
  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE users SET name = ?, phone = ?, category = ? WHERE id = ?`,
      [name, phone, category, id],
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

export { update as updateUser };
