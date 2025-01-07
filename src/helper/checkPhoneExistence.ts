import messages from "../data/messages";
import { FILE_NAME, isPhoneExist, readFile, UserRow } from "./processFile";

export function checkPhoneExistence(phone: number): boolean {
  const users: UserRow[] = readFile(FILE_NAME);
  const phoneExist = isPhoneExist(phone, users);
  if (phoneExist) console.log(messages.phoneExists);
  return !phoneExist;
}
