import askForAnotherData from "../../helper/askForAnotherData";
import messages from "../../../data/messages.json";
import {
  findUserByIndex,
  inputPhone,
  isUsersEmpty,
  logUsers,
  users,
  USERS_FILE,
} from "./utils";
import prompt from "../../helper/prompt";
import { inputCategory } from "../category/utils";
import { updateUser } from "../../api/users/update";
import saveOnDatabase from "../../configs/saveOnDatabase";
import { write } from "../manageFile/write";
import { userMenu } from "./menu";

async function edit() {
  if (isUsersEmpty()) {
    console.log(messages.emptyList.replace('{name}','users'));
    return userMenu();
  }
  logUsers();
  const userIndex = await prompt<number>(messages.chooseUser, {
    type: "number",
  });
  const user = findUserByIndex(userIndex);
  if (user) {
    user.name = await prompt<string>(messages.userName);
    user.phone = await inputPhone();
    user.category = await inputCategory();
    if (saveOnDatabase) updateUser(user as any);
    else
      write({
        fileName: USERS_FILE,
        data: users,
      });
    logUsers();
    const label = messages.askForAnother.replace("{action}", "edit");
    askForAnotherData(label, edit);
  }
}

export { edit as editUser };
