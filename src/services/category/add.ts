import messages from "../../../data/messages.json";
import { createData } from "../databaseEngine/create";
import { categoryMenu } from "./menu";
import { categories, CATEGORIES_TABLE_NAME } from "./utils/data";
import inputCategoryName from "./utils/inputs/inputCategoryName";

async function add() {
  const data = {
    id: Math.floor(Math.random() * 1000000) + Date.now(),
    name: await inputCategoryName(),
  };
  categories.push(data);
  createData(CATEGORIES_TABLE_NAME, data, categories);
  console.log(messages.categoryAdd);
  categoryMenu();
}

export { add as addCetegory };
