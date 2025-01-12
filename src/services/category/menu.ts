import inquirer from "inquirer";
import messages from "../../data/messages.json";
import { addCetegory } from "./add";
import { editCategory } from "./edit";
import { removeCategory } from "./remove";
import { viewCategory } from "./view";
import mainMenu from "../../mainMenu";

function menu() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: messages.chooseCategoryAction,
        choices: ["Add", "Edit", "Remove", "List", "Back to main menu"],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case "Add":
          addCetegory();
          break;
        case "Edit":
          editCategory();
          break;
        case "Remove":
          removeCategory();
          break;
        case "List":
          viewCategory();
          break;
        case "Back to main menu":
          mainMenu();
          break;
      }
    });
}
export { menu as categoryMenu };
