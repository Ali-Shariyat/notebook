import prompt from "../../../../helper/prompt";
import messages from "../../../../../data/messages.json";
import isCategoryExist from "../isCategoryExist";

export default async function inputCategoryName() {
  let name = "";
  let isExist = false;
  while (!isExist) {
    name = await prompt<string>(messages.chooseCategory);
    isExist = !isCategoryExist(name);
    if (!isExist) {
      console.log(messages.categoryExist);
    }
  }
  return name;
}
