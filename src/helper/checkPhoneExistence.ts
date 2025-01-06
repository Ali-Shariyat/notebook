import messages from "../data/messages";
import { isPhoneExist } from "./processFile";

export function checkPhoneExistence(phone: number): boolean {
  const phoneExist = isPhoneExist(phone);
  if (phoneExist) console.log(messages.phoneExists);
  return !phoneExist;
}