import messages from "./data/messages";
import askForAnotherData from "./helper/askForAnotherData";
import { checkPhoneExistence } from "./helper/checkPhoneExistence";
import { FILE_NAME, writeFile } from "./helper/processFile";
import { prompt } from "./helper/readline";
interface DataRow {
  name: string;
  phone: null | number;
}
export default async function App() {
  const data: DataRow = {
    name: (await prompt(messages.userName)) as string,
    phone: null,
  };
  let isValidPhone = false;

  while (!isValidPhone) {
    data.phone = (await prompt(messages.userPhone, {
      type: "number",
    })) as number;
    isValidPhone = checkPhoneExistence(data.phone);
  }
  writeFile(FILE_NAME, data);
  askForAnotherData();
}
