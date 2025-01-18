import { categories, CategoryRow } from "./data";

export default function findCategoryByIndex(
  _index: number
): CategoryRow | undefined {
  return categories.find((_, index) => _index === index);
}
