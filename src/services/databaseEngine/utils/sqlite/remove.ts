import { removeCategory } from "../../../../repositories/sqlite/categories/remove";
import { removeUser } from "../../../../repositories/sqlite/users/remove";

const remove = (table: string, id: number): void | Promise<any> => {
  if (table === "users") return removeUser({ id });
  if (table === "categories") return removeCategory({ id });
};

export { remove as removeDataFromSqlite };
