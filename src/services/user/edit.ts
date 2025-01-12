import askForAnotherData from "../../helper/askForAnotherData";
import messages from "../../data/messages.json";
import {
  findUserByIndex,
  inputPhone,
  logUsers,
  users,
  USERS_FILE,
} from "./utils";
import prompt from "../../helper/prompt";
import { inputCategory } from "../category/utils";
import { write } from "../manageFile/write";

async function edit() {
  logUsers();
  const userIndex = await prompt<number>(messages.chooseUser, {
    type: "number",
  });
  const user = findUserByIndex(userIndex);
  if (user) {
    user.name = await prompt<string>(messages.userName);
    user.phone = await inputPhone();
    user.category = await inputCategory();
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
