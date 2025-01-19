import mainMenu from "./mainMenu";
import { getCategories } from "./services/category/utils/data";
import getUsers from "./services/user/utils/data";

export default async function App() {
  await getUsers();
  await getCategories();
  mainMenu();
}
