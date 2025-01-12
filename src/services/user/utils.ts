import messages from "../../../data/messages.json";
import prompt from "../../helper/prompt";
import { findCategoryById } from "../category/utils";
import { read } from "../manageFile/read";

export const USERS_FILE = "users.json";

export interface UserRow {
  name?: string;
  phone?: number;
  category: number;
}

export let users: UserRow[] = read({ fileName: USERS_FILE });

export function findUserByIndex(index: number) {
  return users.find((_, _index) => index === _index);
}

export function isPhoneExist(phone: number): boolean {
  return users.some((user: UserRow) => user.phone === phone);
}

export function logUsers() {
  const _users = users.map((item) => ({
    ...item,
    category: findCategoryById(item.category)?.name,
  }));
  console.table(_users, ["name", "phone", "category"]);
}

export async function inputPhone() {
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
