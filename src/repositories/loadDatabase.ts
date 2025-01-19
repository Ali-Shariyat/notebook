import isSqlite from "../services/databaseEngine/utils/sqlite/isSqlite";
import categoriesTable from "./sqlite/categories/table";
import usersTable from "./sqlite/users/table";

const loadDatabase = async () => {
  if (isSqlite()) {
    await usersTable();
    await categoriesTable();
  }
};

export default loadDatabase;
