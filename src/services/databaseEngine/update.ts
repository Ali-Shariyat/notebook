import { writeJson } from "../../helper/file/write";
import { updateDataInSqlite } from "./utils/sqlite/update";
import isSqlite from "./utils/sqlite/isSqlite";

const update = (table: string, data: any, list: any[]) => {
  if (isSqlite()) {
    return updateDataInSqlite(table, data);
  } else {
    writeJson({ fileName: `database/${table}.json`, data: list });
  }
};

export { update as updateData };
