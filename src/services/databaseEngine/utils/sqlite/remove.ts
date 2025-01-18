import { removeCategory } from "../../../../repositories/sqlite/categories/remove";
import { removeUser } from "../../../../repositories/sqlite/users/remove";

const remove = (fileName: string, id: number): void | Promise<any> => {
  if (fileName === "users") return removeUser({ id });
  if (fileName === "categories") return removeCategory({ id });
};

export { remove as removeDataFromSqlite };
