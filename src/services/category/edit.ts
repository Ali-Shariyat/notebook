import prompt from "../../helper/prompt";
import {
  categories,
  CATEGORIES_FILE,
  findCategoryByIndex,
  inputCategoryName,
  isCategoriesEmpty,
  listCategories,
} from "./utils";
import messages from "../../../data/messages.json";
import { write } from "../manageFile/write";
import { categoryMenu } from "./menu";
import saveOnDatabase from "../../configs/saveOnDatabase";
import { updateCategory } from "../../api/categories/update";

async function edit() {
  if (isCategoriesEmpty()) {
    console.log(messages.emptyList.replace('{name}','categories'));
    return categoryMenu();
  }
  listCategories();
  const categoryIndex = await prompt<number>(messages.chooseCategoryIndex, {
    type: "number",
  });
  let category = findCategoryByIndex(categoryIndex);

  if (category) {
    category.name = await inputCategoryName();
    if (saveOnDatabase) updateCategory(category as any);
    else
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
