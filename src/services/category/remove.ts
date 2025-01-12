import prompt from "../../helper/prompt";
import messages from "../../../data/messages.json";
import { categories, CATEGORIES_FILE, listCategories } from "./utils";
import { write } from "../manageFile/write";
import { categoryMenu } from "./menu";

async function remove() {
  listCategories();
  const categoryIndex = await prompt<number>(messages.chooseToRemoveCategory, {
    type: "number",
  });

  categories.splice(categoryIndex, 1);
  write({ fileName: CATEGORIES_FILE, data: categories });
  console.log(messages.categorySuccessfullyRemoved);
  categoryMenu();
}

export { remove as removeCategory };
