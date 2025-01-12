import prompt from "../../helper/prompt";
import {
  categories,
  CATEGORIES_FILE,
  findCategoryByIndex,
  inputCategoryName,
  listCategories,
} from "./utils";
import messages from "../../data/messages.json";
import { write } from "../manageFile/write";
import { categoryMenu } from "./menu";

async function edit() {
  listCategories();
  const categoryIndex = await prompt<number>(messages.chooseCategoryIndex, {
    type: "number",
  });
  let category = findCategoryByIndex(categoryIndex);

  if (category) {
    category.name = await inputCategoryName();
    write({
      fileName: CATEGORIES_FILE,
      data: categories,
    });
    listCategories();
    categoryMenu();
  } else {
    console.log(messages.categoryDoesNotExist);
    edit();
  }
}

export { edit as editCategory };
