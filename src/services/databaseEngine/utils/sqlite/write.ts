import { insertCategory } from "../../../../repositories/sqlite/categories/insert";
import { insertUser } from "../../../../repositories/sqlite/users/insert";

const write = (fileName: string, data: any): void | Promise<any> => {
  if (fileName === "users") return insertUser(data);
  if (fileName === "categories") return insertCategory(data);
};

export { write as writeDataToSqlite };
