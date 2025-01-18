import { userMenu } from "./menu";
import showUsersList from "./utils/showUserList";

function view() {
  showUsersList();
  userMenu();
}

export { view as viewUsers };
