import findCategoryById from "../../../services/category/utils/findCategoryById";
import { users } from "./data";

export default function showUsersList() {
  const _users = users.map((item) => ({
    ...item,
    category: findCategoryById(item.category)?.name || "_____",
  }));
  console.table(_users, ["name", "phone", "category"]);
}
