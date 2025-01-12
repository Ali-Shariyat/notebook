import inquirer from "inquirer";
import { addUser } from "./add";
import { editUser } from "./edit";
import { removeUser } from "./remove";
import { viewUsers } from "./view";
import mainMenu from "../../mainMenu";

export default function menu() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Choose an action:",
        choices: ["Add", "Edit", "Remove", "List", "Back to main menu"],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case "Add":
          addUser();
          break;
        case "Edit":
          editUser();
          break;
        case "Remove":
          removeUser();
          break;
        case "List":
          viewUsers();
          break;
        case "Back to main menu":
          mainMenu();
          break;
      }
    });
}

export { menu as userMenu };
