import { categories } from "./data";

export default function isCategoryExist(value: string) {
  return categories.some(({ name }) => value === name);
}
