import prompt from "../../helper/prompt";
import messages from "../../../data/messages.json";
import { categoryMenu } from "./menu";
import isCategoriesEmpty from "./utils/isCategoriesEmpty";
import showCategoriesList from "./utils/showCategoriesList";
import { updateData } from "../databaseEngine/update";
import inputCategoryName from "./utils/inputs/inputCategoryName";
import { categories, CATEGORIES_TABLE_NAME } from "./utils/data";
import findCategoryByIndex from "./utils/findCategoryByIndex";

async function edit() {
  if (isCategoriesEmpty()) {
    console.log(messages.emptyList.replace("{name}", "categories"));
    return categoryMenu();
  }
  showCategoriesList();
  const categoryIndex = await prompt<number>(messages.chooseCategoryIndex, {
    type: "number",
  });
  let category = findCategoryByIndex(categoryIndex);

  if (category) {
    category.name = await inputCategoryName();
    updateData(CATEGORIES_TABLE_NAME, category, categories);
    showCategoriesList();
    categoryMenu();
  } else {
    console.log(messages.categoryDoesNotExist);
    edit();
  }
}

export { edit as editCategory };
