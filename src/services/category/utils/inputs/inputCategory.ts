import prompt from "../../../../helper/prompt";
import messages from "../../../../../data/messages.json";
import { categories } from "../data";
import showCategoriesList from "../showCategoriesList";

export async function inputCategory() {
  showCategoriesList();
  const categoryIndex = await prompt<number>(messages.chooseCategoryToApply, {
    type: "number",
  });
  const category = categories.find((_, index) => categoryIndex === index);
  if (category) {
    return category?.id;
  } else return 0;
}
