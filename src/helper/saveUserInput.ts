import * as fs from "fs/promises";
import promptForAdditionalUser from "./promptForAdditionalUser";
import { type Interface } from "readline";

interface PropsFace {
  name: string;
  phone: string;
  rl?: Interface;
}
export default async function saveUserInput({ name, phone, rl }: PropsFace) {
  let users = [];
  try {
    const data = await fs.readFile("user.json", "utf8");
    users = JSON.parse(data) || [];
  } catch (err) {}

  users.push({ name, phone });

  try {
    await fs.writeFile("user.json", JSON.stringify(users, null, 2));
    if (rl) promptForAdditionalUser({ rl });
  } catch (writeErr) {
    console.error("Error writing to file", writeErr);
  }
}
