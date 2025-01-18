import askForAnotherData from "../../helper/askForAnotherData";
import messages from "../../../data/messages.json";
import { UserRow, users, USERS_TABLE_NAME } from "./utils/data";
import { inputName } from "./utils/inputs/inputName";
import inputPhone from "./utils/inputs/inputPhone";
import { createData } from "../databaseEngine/create";
import { inputCategory } from "../category/utils/inputs/inputCategory";
import isCategoriesEmpty from "../category/utils/isCategoriesEmpty";
import App from "../../app";

async function add() {
  if (isCategoriesEmpty()) {
    console.log(messages.emptyList.replace("{name}", "categories"));
    return App();
  }
  const data: UserRow = {
    id: Math.floor(Math.random() * 1000000) + Date.now(),
    name: await inputName(),
    phone: await inputPhone(),
    category: await inputCategory(),
  };
  users.push(data);
  createData(USERS_TABLE_NAME, data, users);
  const label = messages.askForAnother.replace("{action}", "add");
  askForAnotherData(label, add);
}

export { add as addUser };
