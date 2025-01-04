import * as fs from "fs";

export default function readUserDataFromFile<T>(): T[] {
  try {
    const fileContent = fs.readFileSync("user.json", "utf8");
    return fileContent ? (JSON.parse(fileContent) as T[]) : [];
  } catch (readErr) {
    return [];
  }
}
