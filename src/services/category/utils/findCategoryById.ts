import { categories, CategoryRow } from "./data";

export default function findCategoryById(_id: number): CategoryRow | undefined {
  return categories.find(({ id }) => _id === id);
}
