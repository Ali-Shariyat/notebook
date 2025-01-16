import prompt from "../../helper/prompt";
import messages from "../../../data/messages.json";
import {
  categories,
  CATEGORIES_FILE,
  findCategoryByIndex,
  isCategoriesEmpty,
  listCategories,
} from "./utils";
import { write } from "../manageFile/write";
import { categoryMenu } from "./menu";
import { removeCategory } from "../../api/categories/remove";
import saveOnDatabase from "../../configs/saveOnDatabase";

async function remove() {
  if (isCategoriesEmpty()) {
    console.log(messages.emptyList.replace('{name}','categories'));
    return categoryMenu();
  }
  listCategories();
  const categoryIndex = await prompt<number>(messages.chooseToRemoveCategory, {
    type: "number",
  });
  const filtredCategory = categories.filter(
    (_, index) => index !== categoryIndex
  );
  const currentCategory = findCategoryByIndex(categoryIndex);
  categories.splice(0, categories.length, ...filtredCategory);
  if (saveOnDatabase) removeCategory({ id: currentCategory?.id } as any);
  else write({ fileName: CATEGORIES_FILE, data: categories });
  console.log(messages.categorySuccessfullyRemoved);
  categoryMenu();
}

export { remove as removeCategory };
