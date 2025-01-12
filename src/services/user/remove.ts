import mainMenu from "../../mainMenu";
import { logUsers, users, USERS_FILE } from "./utils";
import prompt from "../../helper/prompt";
import messages from "../../data/messages.json";
import { write } from "../manageFile/write";

async function remove() {
  logUsers();
  const userIndex = await prompt<number>(messages.chooseUserToRemove, {
    type: "number",
  });

  const filtredCategory = users.filter((_, index) => index !== userIndex);
  users.splice(0, users.length, ...filtredCategory);
  write({ fileName: USERS_FILE, data: users });
  console.log(messages.userSuccessfullyRemoved);
  mainMenu();
}

export { remove as removeUser };
