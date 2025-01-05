import { createInterface } from "readline";
import { readFileSync } from "fs";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function readUserDataFromFile() {
  try {
    const fileContent = readFileSync("user.json", "utf8");
    return fileContent ? JSON.parse(fileContent) : [];
  } catch (readErr) {
    return [];
  }
}

export default readline;
