import * as fs from "fs";
import promptForAdditionalUser from "./promptForAdditionalUser";
import readUserDataFromFile from "./readUserDataFromFile";
import getUserInput from "./getUserInput";

interface SaveUserInputRaw {
  name: string;
  phone: string;
}

const users = readUserDataFromFile<SaveUserInputRaw>();

const checkPhoneExist = (phone: string): boolean =>
  users.some((user) => user.phone === phone);

const writeUserDataToFile = (user: SaveUserInputRaw): void => {
  users.push(user);
  try {
    fs.writeFileSync("user.json", JSON.stringify(users, null, 2));
    promptForAdditionalUser();
  } catch (error) {
    console.error("Error writing to file", error);
  }
};

const handlePhoneExistence = async (user: SaveUserInputRaw): Promise<void> => {
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

export default async function saveUserInput(
  user: SaveUserInputRaw
): Promise<void> {
  await handlePhoneExistence(user);
}
