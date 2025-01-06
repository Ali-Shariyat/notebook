import messages from "../data/messages";
import { isPhoneExist } from "./processFile";

export function checkPhoneExistence(phone: number): boolean {
  if (isPhoneExist(phone)) {
    console.log(messages.phoneExists);
    return false;
  }
  return true;
}
