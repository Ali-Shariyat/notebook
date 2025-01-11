import collectPhone from "./collectPhone";
import { FILE_NAME, readFile, save } from "./processFile";
import messages from "../data/messages.json";
import { prompt } from "./readline";
import askForAnotherData from "./askForAnotherData";
import inquirer from "inquirer";
import {
  categories,
  categoryMenu,
  findCategoryById,
  logCategories,
} from "./processCategories";

const { prompt: inquirerPrompt } = inquirer;

export interface UserRow {
  name: string;
  phone?: number;
  category: number;
}

let users: UserRow[] = readFile(FILE_NAME);

const findUserByIndex = (index: number) =>
  users.find((_, _index) => index === _index);

function isPhoneExist(phone: number): boolean {
  return users.some((user: UserRow) => user.phone === phone);
}

function logUsers() {
  const _users = users.map((item) => ({
    ...item,
    category: findCategoryById(item.category)?.name,
  }));
  console.table(_users, ["name", "phone", "category"]);
}

async function add() {
  const data: UserRow = {
    name: await prompt<string>(messages.userName),
    phone: await collectPhone(),
    category: await collectCategory(),
  };
  save({
    fileName: FILE_NAME,
    data,
    storage: users,
  });
  const label = messages.askForAnother.replace("{action}", "add");
  askForAnotherData(label, add);
}

async function remove() {
  logUsers();
  const userIndex = await prompt<number>(messages.chooseUserToRemove, {
    type: "number",
  });

  const filtredCategory = users.filter((_, index) => index !== userIndex);
  users = filtredCategory;
  save({ fileName: FILE_NAME, storage: users });
  console.log(messages.userSuccessfullyRemoved);
  menu();
}

async function edit() {
  logUsers();
  const userIndex = await prompt<number>(messages.chooseUser, {
    type: "number",
  });
  const user = findUserByIndex(userIndex);
  if (user) {
    user.name = await prompt<string>(messages.userName);
    user.phone = await collectPhone();
    user.category = await collectCategory();
    save({
      fileName: FILE_NAME,
      storage: users,
    });
    logUsers();
    const label = messages.askForAnother.replace("{action}", "edit");
    askForAnotherData(label, edit);
  }
}

async function collectCategory() {
  logCategories();
  const categoryIndex = await prompt<number>("choose category index to apply", {
    type: "number",
  });
  const category = categories.find((_, index) => categoryIndex === index);
  if (category) {
    return category?.id;
  } else return 0;
}

function view() {
  logUsers();
  menu();
}

function menu() {
  return inquirerPrompt([
    {
      type: "list",
      name: "action",
      message: "Choose an action:",
      choices: ["Add", "Edit", "Remove", "List", "Manage Category", "Exit"],
    },
  ]).then((answers) => {
    switch (answers.action) {
      case "Add":
        add();
        break;
      case "Edit":
        edit();
        break;
      case "Remove":
        remove();
        break;
      case "List":
        view();
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

export { menu as mainMenu, users, add, edit, view, isPhoneExist };
