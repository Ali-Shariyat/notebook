import db from "../database.js";

async function list(): Promise<any> {
  try {
    const rows = await new Promise((resolve, reject) => {
      db.all(`SELECT * FROM users`, [], (err, rows: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    }).then((rows) => rows);
    return rows;
  } catch (err) {
    throw err;
  }
}

export { list as usersList };
