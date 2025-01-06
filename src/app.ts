import askForAnotherData from "./helper/askForAnotherData";
import { checkPhoneExistence } from "./helper/checkPhoneExistence";
import { collectUserName, collectUserPhone } from "./helper/collectUserData";
import { FILE_NAME, writeFile } from "./helper/processFile";

export default async function App() {
  const name = await collectUserName();
  let phone;
  let isValidPhone = false;

  while (!isValidPhone) {
    phone = await collectUserPhone();
    isValidPhone = await checkPhoneExistence(phone);
  }

  const data = { name, phone };
  writeFile(FILE_NAME, data);
  askForAnotherData();
}
