import { readFileSync, writeFileSync } from "fs";

const FILE_NAME = "users.json";

const users = readFile(FILE_NAME);

function readFile(fileName: string) {
  try {
    return JSON.parse(readFileSync(fileName, "utf-8"));
  } catch (error) {
    return [];
  }
}

const writeFile = (fileName: string, data: any) => {
  try {
    writeFileSync(fileName, JSON.stringify([...users, data], null, 2), "utf-8");
    users.push(data);
  } catch (error) {}
};

function isPhoneExist(phone: number): boolean {
  return users.some((user: { phone: number }) => user.phone === phone);
}

export { readFile, writeFile, isPhoneExist, FILE_NAME };
