import prompt from "../../helper/prompt";
import messages from "../../../data/messages.json";
import { read } from "../manageFile/read";

export const CATEGORIES_FILE = "categories.json";

interface CategoryRow {
  id: number;
  name: string;
}

export let categories: CategoryRow[] = read({ fileName: CATEGORIES_FILE });

export function isCategoryExist(value: string) {
  return categories.some(({ name }) => value === name);
}
export function findCategoryByIndex(_index: number) {
  return categories.find((_, index) => _index === index);
}
export function findCategoryById(_id: number) {
  return categories.find(({ id }) => id === _id);
}
export function listCategories() {
  console.table(categories, ["name"]);
}

export async function inputCategory() {
  listCategories();
  const categoryIndex = await prompt<number>(messages.chooseCategoryToApply, {
    type: "number",
  });
  const category = categories.find((_, index) => categoryIndex === index);
  if (category) {
    return category?.id;
  } else return 0;
}

export async function inputCategoryName() {
  let name = "";
  let isExist = false;
  while (!isExist) {
    name = await prompt<string>(messages.chooseCategory);
    isExist = !isCategoryExist(name);
    console.log(messages.categoryExist);
  }
  return name;
}
