import { readData } from "../../../services/databaseEngine/read";

export interface CategoryRow {
  id: number;
  name: string;
}

export const CATEGORIES_TABLE_NAME = "categories";

export let categories: CategoryRow[] = [];

export async function getCategories() {
  try {
    categories = (await readData(CATEGORIES_TABLE_NAME)) as any;
  } catch (err) {
    console.error("Error loading users:", err);
  }
}
