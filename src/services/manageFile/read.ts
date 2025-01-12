import { readFileSync } from "fs";
interface ReadRow {
  fileName: string;
}
export function read({ fileName }: ReadRow) {
  try {
    return JSON.parse(readFileSync(fileName, "utf-8"));
  } catch (error) {
    return [];
  }
}
