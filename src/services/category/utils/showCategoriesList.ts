import { categories } from "./data";

export default function showCategoriesList() {
  console.table(categories, ["name"]);
}
