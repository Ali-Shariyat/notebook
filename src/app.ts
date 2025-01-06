import messages from "./data/messages";
import askForAnotherData from "./helper/askForAnotherData";
import { checkPhoneExistence } from "./helper/checkPhoneExistence";
import { FILE_NAME, writeFile } from "./helper/processFile";
import { prompt } from "./helper/readline";

export default async function App() {
  const name = await prompt(messages.userName);
  let phone;
  let isValidPhone = false;

  while (!isValidPhone) {
    phone = (await prompt(messages.userPhone, {
      type: "number",
    })) as number;
    isValidPhone = checkPhoneExistence(phone);
  }

  const data = { name, phone };
  writeFile(FILE_NAME, data);
  askForAnotherData();
}
