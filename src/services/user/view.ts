import mainMenu from "../../mainMenu";
import { logUsers } from "./utils";

function view() {
  logUsers();
  mainMenu();
}

export { view as viewUsers };
