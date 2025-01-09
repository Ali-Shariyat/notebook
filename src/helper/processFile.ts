import { readFileSync, writeFileSync } from "fs";

const FILE_NAME = "users.json";

interface UserRow {
  name: string;
  phone: number;
}

const users = readFile(FILE_NAME);

function readFile(fileName: string) {
  try {
    return JSON.parse(readFileSync(fileName, "utf-8"));
  } catch (error) {
    return [];
  }
}

function writeFile(fileName: string, data: any) {
  try {
    users.push(data);
    writeFileSync(fileName, JSON.stringify(users, null, 2), "utf-8");
  } catch (error) {}
}

function isPhoneExist(phone: number): boolean {
  return users.some((user: UserRow) => user.phone === phone);
}

export { readFile, writeFile, isPhoneExist, FILE_NAME };
