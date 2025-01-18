import { writeJson } from "../../helper/file/write";
import isSqlite from "./utils/sqlite/isSqlite";
import { writeDataToSqlite } from "./utils/sqlite/write";

const create = (table: string, data: any, list: any[]) => {
  if (isSqlite()) {
    return writeDataToSqlite(table, data);
  } else {
    writeJson({ fileName: `database/${table}.json`, data: list });
  }
};

export { create as createData };
