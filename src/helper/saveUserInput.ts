import * as fs from "fs";
import promptForAdditionalUser from "./promptForAdditionalUser";
import readUserDataFromFile from "./readUserDataFromFile";

interface SaveUserInputRaw {
  name: string;
  phone: string;
}

const users = readUserDataFromFile<SaveUserInputRaw>();

export default async function saveUserInput({ name, phone }: SaveUserInputRaw) {
  users.push({ name, phone });
  try {
    fs.writeFileSync("user.json", JSON.stringify(users, null, 2));
    promptForAdditionalUser();
  } catch (writeErr) {
    console.error("Error writing to file", writeErr);
  }
}
