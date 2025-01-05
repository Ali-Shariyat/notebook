import getUserInput from "./getUserInput";
import { readUserDataFromFile } from "./readline";
import { UserInputRow } from "@/types";
import promptForAdditionalUser from "./promptForAdditionalUser";
import { writeFileSync } from "fs";

const users = readUserDataFromFile<UserInputRow>();
const writeUserDataToFile = (user: UserInputRow): void => {
  users.push(user);
  try {
    writeFileSync("user.json", JSON.stringify(users, null, 2));
    promptForAdditionalUser();
  } catch (error) {
    console.error("Error writing to file", error);
  }
};

const checkPhoneExist = (phone: string): boolean =>
  users.some((user) => user.phone === phone);

const handlePhoneExistence = async (user: UserInputRow): Promise<void> => {
  if (checkPhoneExist(user.phone)) {
    console.log("Phone number already exists");
    const newPhone = await getUserInput({
      label: "Choose another phone number:",
    });
    await handlePhoneExistence({ ...user, phone: newPhone });
  } else {
    writeUserDataToFile(user);
  }
};

export default async function saveUserInput(user: UserInputRow): Promise<void> {
  await handlePhoneExistence(user);
}
