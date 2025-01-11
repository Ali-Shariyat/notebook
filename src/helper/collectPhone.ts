import { prompt } from "./readline";
import messages from "../data/messages.json";
import { checkPhoneExistence } from "./checkPhoneExistence";

export default async function collectPhone() {
  let phone;
  let isValidPhone = false;

  while (!isValidPhone) {
    phone = await prompt<number>(messages.userPhone, {
      type: "number",
    });
    isValidPhone = checkPhoneExistence(phone);
  }

  return phone;
}
