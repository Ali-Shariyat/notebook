import App from "./app";
import categoriesTable from "./repositories/sqlite/categories/table";
import usersTable from "./repositories/sqlite/users/table";
import { getCategories } from "./services/category/utils/data";
import isSqlite from "./services/databaseEngine/utils/sqlite/isSqlite";
import getUsers from "./services/user/utils/data";

(async () => {
  if (isSqlite()) {
    await usersTable();
    await categoriesTable();
  }
  await getUsers();
  await getCategories();
  App();
})();
