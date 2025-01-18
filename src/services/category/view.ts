import { categoryMenu } from "./menu";
import showCategoriesList from "./utils/showCategoriesList";

async function view() {
  showCategoriesList();
  categoryMenu();
}

export { view as viewCategory };
