import { readJson } from "../../helper/file/read";
import isSqlite from "./utils/sqlite/isSqlite";
import { readDataFromSqlite } from "./utils/sqlite/read";

const read = (table: string) => {
  if (isSqlite()) {
    return readDataFromSqlite(table);
  } else {
    return readJson({ fileName: `database/${table}.json` });
  }
};

export { read as readData };
