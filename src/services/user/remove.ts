import mainMenu from "../../mainMenu";
import prompt from "../../helper/prompt";
import messages from "../../../data/messages.json";
import { userMenu } from "./menu";
import isUsersEmpty from "./utils/isUsersEmpty";
import showUsersList from "./utils/showUserList";
import { users, USERS_TABLE_NAME } from "./utils/data";
import findUserByIndex from "./utils/findUserByIndex";
import { removeData } from "../databaseEngine/remove";

async function remove() {
  if (isUsersEmpty()) {
    console.log(messages.emptyList.replace("{name}", "users"));
    return userMenu();
  }
  showUsersList();
  const userIndex = await prompt<number>(messages.chooseUserToRemove, {
    type: "number",
  });
  const filtredCategory = users.filter((_, index) => index !== userIndex);
  const currentUser = findUserByIndex(userIndex);

  console.log(currentUser);
  if (currentUser && currentUser.id) {
    users.splice(0, users.length, ...filtredCategory);
    removeData(USERS_TABLE_NAME, currentUser?.id, users);
  }

  console.log(messages.userSuccessfullyRemoved);
  mainMenu();
}

export { remove as removeUser };
