import categoriesTable from "./api/categories/table";
import usersTable from "./api/users/table";
import App from "./app";
import { getCategories } from "./services/category/utils";
import { getUsers } from "./services/user/utils";

(async () => {
  await usersTable();
  await categoriesTable();
  await getUsers();
  await getCategories();
  App();
})();
