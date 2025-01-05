import { readFileSync } from "fs";

export default function readUserDataFromFile() {
  try {
    const fileContent = readFileSync("user.json", "utf8");
    return fileContent ? JSON.parse(fileContent) : [];
  } catch (readErr) {
    return [];
  }
}
