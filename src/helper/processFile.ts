import { readFileSync, writeFileSync } from "fs";

const FILE_NAME = "users.json";

export interface UserRow {
  name: string;
  phone?: number;
}

function readFile<T>(fileName: string): T {
  try {
    return JSON.parse(readFileSync(fileName, "utf-8"));
  } catch (error) {
    console.error(`Error reading file ${fileName}:`, error);
    throw error;
  }
}

function writeFile<T>(fileName: string, data: T[]): void {
  try {
    writeFileSync(fileName, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error(`Error writing file ${fileName}:`, error);
  }
}

function isPhoneExist(phone: number, users: UserRow[]): boolean {
  return users.some((user) => user.phone === phone);
}

export { readFile, writeFile, isPhoneExist, FILE_NAME };
