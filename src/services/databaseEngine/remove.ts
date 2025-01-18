import { writeJson } from "../../helper/file/write";
import { removeCategory } from "../../repositories/sqlite/categories/remove";
import { removeUser } from "../../repositories/sqlite/users/remove";
import isSqlite from "./utils/sqlite/isSqlite";

const remove = (
  table: string,
  id: number,
  list: any[]
): void | Promise<any> => {
  if (isSqlite()) {
    if (table === "users") return removeUser({ id });
    if (table === "categories") return removeCategory({ id });
  } else {
    writeJson({ fileName: `database/${table}.json`, data: list });
  }
};

export { remove as removeData };
