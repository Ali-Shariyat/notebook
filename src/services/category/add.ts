import messages from "../../../data/messages.json";
import { categories, CATEGORIES_FILE, inputCategoryName } from "./utils";
import { write } from "../manageFile/write";
import { categoryMenu } from "./menu";
import saveOnDatabase from "../../configs/saveOnDatabase";
import { insertCategory } from "../../api/categories/insert";

async function add() {
  const data = {
    id: Math.floor(Math.random() * 1000000) + Date.now(),
    name: await inputCategoryName(),
  };
  categories.push(data);
  if (saveOnDatabase) insertCategory(data);
  else
    write({
      fileName: CATEGORIES_FILE,
      data: categories,
    });
  console.log(messages.categoryAdd);
  categoryMenu();
}

export { add as addCetegory };
