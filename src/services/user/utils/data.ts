import { readData } from "../../../services/databaseEngine/read";

export interface UserRow {
  id?: number;
  name?: string;
  phone?: number;
  category: number;
}

export const USERS_TABLE_NAME = "users";

export let users: UserRow[];

export default async function getUsers() {
  try {
    users = await readData(USERS_TABLE_NAME);
  } catch (err) {
    console.error("Error loading users:", err);
  }
}
