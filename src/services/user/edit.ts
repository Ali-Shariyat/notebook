import askForAnotherData from "../../helper/askForAnotherData";
import messages from "../../../data/messages.json";
import prompt from "../../helper/prompt";
import { userMenu } from "./menu";
import showUsersList from "./utils/showUserList";
import { users, USERS_TABLE_NAME } from "./utils/data";
import inputPhone from "./utils/inputs/inputPhone";
import findUserByIndex from "./utils/findUserByIndex";
import isUsersEmpty from "./utils/isUsersEmpty";
import { updateData } from "../databaseEngine/update";
import { inputCategory } from "../category/utils/inputs/inputCategory";

async function edit() {
  if (isUsersEmpty()) {
    console.log(messages.emptyList.replace("{name}", "users"));
    return userMenu();
  }
  showUsersList();
  const userIndex = await prompt<number>(messages.chooseUser, {
    type: "number",
  });
  const user = findUserByIndex(userIndex);
  if (user) {
    user.name = await prompt<string>(messages.userName);
    user.phone = await inputPhone();
    user.category = await inputCategory();
    updateData(USERS_TABLE_NAME, user, users);
    showUsersList();
    const label = messages.askForAnother.replace("{action}", "edit");
    askForAnotherData(label, edit);
  }
}

export { edit as editUser };
