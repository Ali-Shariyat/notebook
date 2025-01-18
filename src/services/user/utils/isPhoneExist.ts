import { UserRow, users } from "./data";

export default function isPhoneExist(phone: number): boolean {
  return users.some((user: UserRow) => user.phone === phone);
}
