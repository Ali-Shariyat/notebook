import messages from "../data/messages";
import { FILE_NAME, isPhoneExist, readFile, UserRow } from "./processFile";

/**
 * Checks if a phone number already exists in the users file.
 * @param phone - The phone number to check.
 * @returns A boolean indicating whether the phone number exists.
 */
export function checkPhoneExistence(phone: number): boolean {
  const users: UserRow[] = readFile(FILE_NAME);
  const phoneExist = isPhoneExist(phone, users);
  if (phoneExist) console.log(messages.phoneExists);
  return !phoneExist;
}
