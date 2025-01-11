import messages from "../data/messages.json";
import { isPhoneExist } from "./processUsers";

export function checkPhoneExistence(phone: number): boolean {
  const phoneExist = isPhoneExist(phone);
  if (phoneExist) console.log(messages.phoneExists);
  return !phoneExist;
}
