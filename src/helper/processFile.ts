import { readFileSync, writeFileSync } from "fs";

const FILE_NAME = "users.json";

/**
 * Represents a user row in the users file.
 */
export interface UserRow {
  name: string;
  phone?: number;
}

/**
 * Reads a file and parses its contents as Object.
 * @param fileName - The name of the file to read.
 * @returns The parsed contents of the file.
 */
function readFile<T>(fileName: string): T {
  try {
    return JSON.parse(readFileSync(fileName, "utf-8"));
  } catch (error) {
    console.error(`Error reading file ${fileName}:`, error);
    throw error;
  }
}

/**
 * Writes data to a file as JSON.
 * @param fileName - The name of the file to write to.
 * @param data - The data to write to the file.
 */
function writeFile<T>(fileName: string, data: T[]): void {
  try {
    writeFileSync(fileName, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error(`Error writing file ${fileName}:`, error);
  }
}

/**
 * Checks if a phone number exists in a list of users.
 * @param phone - The phone number to check.
 * @param users - The list of users to check against.
 * @returns A boolean indicating whether the phone number exists.
 */
function isPhoneExist(phone: number, users: UserRow[]): boolean {
  return users.some((user) => user.phone === phone);
}

export { readFile, writeFile, isPhoneExist, FILE_NAME };
