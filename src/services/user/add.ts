import askForAnotherData from "../../helper/askForAnotherData";
import messages from "../../../data/messages.json";
import { inputName, inputPhone, UserRow, users, USERS_FILE } from "./utils";
import { inputCategory } from "../category/utils";
import { insertUser } from "../../api/users/insert";
import { write } from "../manageFile/write";
import saveOnDatabase from "../../configs/saveOnDatabase";

async function add() {
  const data: UserRow = {
    name: await inputName(),
    phone: await inputPhone(),
    category: await inputCategory(),
  };
  users.push(data);

  if (saveOnDatabase) insertUser(data as any);
  else
    write({
      fileName: USERS_FILE,
      data: users,
    });

  const label = messages.askForAnother.replace("{action}", "add");
  askForAnotherData(label, add);
}

export { add as addUser };
