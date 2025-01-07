import messages from "./data/messages";
import askForAnotherData from "./helper/askForAnotherData";
import { checkPhoneExistence } from "./helper/checkPhoneExistence";
import { FILE_NAME, readFile, UserRow, writeFile } from "./helper/processFile";
import { prompt } from "./helper/readline";

export default async function App() {
  const users: UserRow[] = readFile(FILE_NAME);
  const data: UserRow = {
    name: (await prompt(messages.userName)) as string,
    phone: undefined,
  };
  let isValidPhone = false;

  while (!isValidPhone) {
    data.phone = (await prompt(messages.userPhone, {
      type: "number",
    })) as number;
    isValidPhone = checkPhoneExistence(data.phone);
  }
  users.push(data);
  writeFile(FILE_NAME, users);
  askForAnotherData();
}
