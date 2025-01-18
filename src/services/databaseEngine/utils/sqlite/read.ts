import { categoriesList } from "../../../../repositories/sqlite/categories/list";
import { usersList } from "../../../../repositories/sqlite/users/list";

const read = (fileName: string): void | Promise<any> => {
  if (fileName === "users") return usersList();
  if (fileName === "categories") return categoriesList();
};

export { read as readDataFromSqlite };
