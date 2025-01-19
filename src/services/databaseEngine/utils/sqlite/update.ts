import { updateCategory } from "../../../../repositories/sqlite/categories/update";
import { updateUser } from "../../../../repositories/sqlite/users/update";

const update = (table: string, data: any): void | Promise<any> => {
  if (table === "users") return updateUser(data);
  if (table === "categories") return updateCategory(data);
};

export { update as updateDataInSqlite };
