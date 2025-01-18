import messages from "../../../../../data/messages.json";
import prompt from "../../../../helper/prompt";
import isPhoneExist from "../isPhoneExist";

export default async function inputPhone() {
  let phone;
  let isValidPhone = false;

  while (!isValidPhone) {
    phone = await prompt<number>(messages.userPhone, {
      type: "number",
    });
    const phoneExist = isPhoneExist(phone);
    if (phoneExist) console.log(messages.phoneExists);
    isValidPhone = !phoneExist;
  }

  return phone;
}
