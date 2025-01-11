import { readFileSync, writeFileSync } from "fs";

const FILE_NAME = "users.json";

function readFile(fileName: string) {
  try {
    return JSON.parse(readFileSync(fileName, "utf-8"));
  } catch (error) {
    return [];
  }
}

interface SaveRow {
  fileName: string;
  data?: any;
  storage: any[];
}

function save({ fileName, data, storage }: SaveRow) {
  try {
    if (data) storage.push(data);
    writeFileSync(fileName, JSON.stringify(storage, null, 2), "utf-8");
  } catch (error) {}
}

export { readFile, save, FILE_NAME };
