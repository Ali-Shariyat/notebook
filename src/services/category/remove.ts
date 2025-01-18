import prompt from "../../helper/prompt";
import messages from "../../../data/messages.json";
import { categoryMenu } from "./menu";
import isCategoriesEmpty from "./utils/isCategoriesEmpty";
import showCategoriesList from "./utils/showCategoriesList";
import { categories, CATEGORIES_TABLE_NAME } from "./utils/data";
import findCategoryByIndex from "./utils/findCategoryByIndex";
import { removeData } from "../databaseEngine/remove";

async function remove() {
  if (isCategoriesEmpty()) {
    console.log(messages.emptyList.replace("{name}", "categories"));
    return categoryMenu();
  }
  showCategoriesList();
  const categoryIndex = await prompt<number>(messages.chooseToRemoveCategory, {
    type: "number",
  });
  const filtredCategory = categories.filter(
    (_, index) => index !== categoryIndex
  );
  const currentCategory = findCategoryByIndex(categoryIndex);
  categories.splice(0, categories.length, ...filtredCategory);
  if (currentCategory && currentCategory.id) {
    categories.splice(0, categories.length, ...filtredCategory);
    removeData(CATEGORIES_TABLE_NAME, currentCategory?.id, categories);
  }
  console.log(messages.categorySuccessfullyRemoved);
  categoryMenu();
}

export { remove as removeCategory };
