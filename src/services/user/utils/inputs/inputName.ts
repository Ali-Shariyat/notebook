import messages from "../../../../../data/messages.json";
import prompt from "../../../../helper/prompt";

export async function inputName() {
  let name;
  let isValid = false;

  while (!isValid) {
    name = await prompt<string>(messages.userName);
    if (!name) console.log(messages.phoneExists);
    isValid = !!name;
  }

  return name;
}
