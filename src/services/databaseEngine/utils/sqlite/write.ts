import { insertCategory } from "../../../../repositories/sqlite/categories/insert";
import { insertUser } from "../../../../repositories/sqlite/users/insert";

const write = (table: string, data: any): void | Promise<any> => {
  if (table === "users") return insertUser(data);
  if (table === "categories") return insertCategory(data);
};

export { write as writeDataToSqlite };
