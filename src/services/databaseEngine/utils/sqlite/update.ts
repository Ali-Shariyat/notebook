import { updateCategory } from "../../../../repositories/sqlite/categories/update";
import { updateUser } from "../../../../repositories/sqlite/users/update";

const update = (fileName: string, data: any): void | Promise<any> => {
  if (fileName === "users") return updateUser(data);
  if (fileName === "categories") return updateCategory(data);
};

export { update as updateDataInSqlite };
