import { categoriesList } from "../../../../repositories/sqlite/categories/list";
import { usersList } from "../../../../repositories/sqlite/users/list";

const read = (table: string): void | Promise<any> => {
  if (table === "users") return usersList();
  if (table === "categories") return categoriesList();
};

export { read as readDataFromSqlite };
