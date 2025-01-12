import { categoryMenu } from "./menu";
import { listCategories } from "./utils";

async function view() {
  listCategories();
  categoryMenu();
}

export { view as viewCategory };
