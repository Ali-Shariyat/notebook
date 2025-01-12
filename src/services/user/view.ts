import { userMenu } from "./menu";
import { logUsers } from "./utils";

function view() {
  logUsers();
  userMenu();
}

export { view as viewUsers };
