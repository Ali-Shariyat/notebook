import messages from "../data/messages";
import { prompt } from "./readline";

export async function collectUserName() {
  const name = await prompt(messages.userName);
  return name;
}

export async function collectUserPhone() {
  const phone = (await prompt(messages.userPhone, {
    type: "number",
  })) as number;
  return phone;
}
