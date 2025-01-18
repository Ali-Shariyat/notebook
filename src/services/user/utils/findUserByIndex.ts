import { users } from "./data";

export default function findUserByIndex(index: number) {
  return users.find((_, _index) => index === _index);
}
