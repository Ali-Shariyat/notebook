import inquirer from "inquirer";
import messages from "./data/messages.json";
import { categoryMenu } from "./services/category/menu";
import { userMenu } from "./services/user/menu";
export default function mainMenu() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Choose an action:",
        choices: ["Manage Users", "Manage Category", "Exit"],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case "Manage Users":
          userMenu();
          break;
        case "Manage Category":
          categoryMenu();
          break;
        case "Exit":
          console.log(messages.goodbye);
          process.exit();
      }
    });
}
