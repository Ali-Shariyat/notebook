import collectPhone from "./collectPhone";
import { FILE_NAME, readFile, save } from "./processFile";
import messages from "../data/messages.json";
import { prompt } from "./readline";
import askForAnotherData from "./askForAnotherData";
import inquirer from "inquirer";

const { prompt: inquirerPrompt } = inquirer;

export interface UserRow {
  name: string;
  phone?: number;
}

const users: UserRow[] = readFile(FILE_NAME);

const findUserByIndex = (index: number) =>
  users.find((_, _index) => index === _index);

async function add() {
  const data: UserRow = {
    name: await prompt<string>(messages.userName),
    phone: await collectPhone(),
  };
  save(FILE_NAME, data);
  const label = messages.askForAnother.replace("{action}", "add");
  askForAnotherData(label, add);
}

async function edit() {
  console.table(users);
  const userIndex = await prompt<number>(messages.chooseUser, {
    type: "number",
  });
  const user = findUserByIndex(userIndex);

  if (user) {
    user.name = await prompt<string>(messages.userName);
    user.phone = await collectPhone();
    save(FILE_NAME);
    console.table(users);
    const label = messages.askForAnother.replace("{action}", "edit");
    askForAnotherData(label, edit);
  }
}

function view() {
  console.table(users);
  menu();
}

function menu() {
  return inquirerPrompt([
    {
      type: "list",
      name: "action",
      message: "Choose an action:",
      choices: ["Add", "Edit", "List", "Exit"],
    },
  ]).then((answers) => {
    switch (answers.action) {
      case "Add":
        add();
        break;
      case "Edit":
        edit();
        break;
      case "List":
        view();
        break;
      case "Exit":
        console.log(messages.goodbye);
        process.exit();
    }
  });
}

export { menu, users, add, edit, view };
