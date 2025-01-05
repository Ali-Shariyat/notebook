import { UserInputRow } from "@/global/types";
import promptForAdditionalUser from "./promptForAdditionalUser";
import { writeFileSync } from "fs";
import { validatePhoneNumber } from "../global/validations";
import messages from "../global/messages";
import readUserDataFromFile from "./readfile";
import { getUserInput } from "./readline";

const users: UserInputRow[] = readUserDataFromFile();

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
  let { phone } = user;

  if (checkPhoneExist(phone)) {
    console.log(messages.phoneExist);
    do {
      phone = await getUserInput({
        label: messages.chooseAnotherPhone,
      });
    } while (!validatePhoneNumber(phone));

    await handlePhoneExistence({ ...user, phone });
  } else {
    writeUserDataToFile(user);
  }
};

export default async function saveUserInput(user: UserInputRow): Promise<void> {
  await handlePhoneExistence(user);
}
