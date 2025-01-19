import { writeJson } from "../../helper/file/write";
import isSqlite from "./utils/sqlite/isSqlite";
import { removeDataFromSqlite } from "./utils/sqlite/remove";

const remove = (
  table: string,
  id: number,
  list: any[]
): void | Promise<any> => {
  if (isSqlite()) {
    removeDataFromSqlite(table, id);
  } else {
    writeJson({ fileName: `database/${table}.json`, data: list });
  }
};

export { remove as removeData };
