import mainMenu from "../../mainMenu";
import {
  findUserByIndex,
  isUsersEmpty,
  logUsers,
  users,
  USERS_FILE,
} from "./utils";
import prompt from "../../helper/prompt";
import messages from "../../../data/messages.json";
import { removeUser } from "../../api/users/remove";
import { write } from "../manageFile/write";
import saveOnDatabase from "../../configs/saveOnDatabase";
import { userMenu } from "./menu";

async function remove() {
  if (isUsersEmpty()) {
    console.log(messages.emptyList.replace("{name}", "users"));
    return userMenu();
  }
  logUsers();
  const userIndex = await prompt<number>(messages.chooseUserToRemove, {
    type: "number",
  });

  const filtredCategory = users.filter((_, index) => index !== userIndex);
  const currentUser = findUserByIndex(userIndex);
  users.splice(0, users.length, ...filtredCategory);

  if (saveOnDatabase) removeUser({ id: currentUser?.id } as any);
  else write({ fileName: USERS_FILE, data: users });

  console.log(messages.userSuccessfullyRemoved);
  mainMenu();
}

export { remove as removeUser };
