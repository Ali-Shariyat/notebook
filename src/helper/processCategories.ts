import inquirer from "inquirer";
import { readFile, save } from "./processFile";
import { prompt } from "./readline";
import { mainMenu } from "./processUsers";
import messages from "../data/messages.json";
const { prompt: inquirerPrompt } = inquirer;

const CATEGORY_FILENAME = "categories.json";

interface CategoryRow {
  id: number;
  name: string;
}

let categories: CategoryRow[] = readFile(CATEGORY_FILENAME);

function isCategoryExist(value: string) {
  return categories.some(({ name }) => value === name);
}
function findCategoryByIndex(_index: number) {
  return categories.find((_, index) => _index === index);
}
function findCategoryById(_id: number) {
  return categories.find(({ id }) => id === _id);
}
function logCategories() {
  console.table(categories, ["name"]);
}

async function collectCategoryName() {
  let name = "";
  let isExist = false;
  while (!isExist) {
    name = await prompt<string>(messages.chooseCategory);
    isExist = !isCategoryExist(name);
    console.log(messages.categoryExist);
  }
  return name;
}

async function add() {
  const data = {
    id: Math.floor(Math.random() * 1000000) + Date.now(),
    name: await collectCategoryName(),
  };
  save({
    fileName: CATEGORY_FILENAME,
    data,
    storage: categories,
  });
  console.log(messages.categoryAdd);
  menu();
}

async function remove() {
  logCategories();
  const categoryIndex = await prompt<number>(messages.chooseToRemoveCategory, {
    type: "number",
  });

  const filtredCategory = categories.filter(
    (_, index) => index !== categoryIndex
  );
  categories = filtredCategory;
  save({ fileName: CATEGORY_FILENAME, storage: categories });
  console.log(messages.categorySuccessfullyRemoved);
  menu();
}

async function edit() {
  logCategories();
  const categoryIndex = await prompt<number>(messages.chooseCategoryIndex, {
    type: "number",
  });
  let category = findCategoryByIndex(categoryIndex);

  if (category) {
    category.name = await collectCategoryName();
    save({
      fileName: CATEGORY_FILENAME,
      storage: categories,
    });
    logCategories();
    menu();
  } else {
    console.log(messages.categoryDoesNotExist);
    edit();
  }
}

async function view() {
  logCategories();
  menu();
}

function menu() {
  return inquirerPrompt([
    {
      type: "list",
      name: "action",
      message: messages.chooseCategoryAction,
      choices: ["Add", "Edit", "Remove", "List", "Back to main menu"],
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
      case "Back to main menu":
        mainMenu();
        break;
    }
  });
}
export {
  add,
  menu as categoryMenu,
  logCategories,
  categories,
  findCategoryById,
};
