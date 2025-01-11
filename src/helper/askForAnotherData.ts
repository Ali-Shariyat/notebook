import { mainMenu } from "./processUsers";
import { prompt } from "./readline";

export default async function askForAnotherData(
  message: string,
  action: Function
) {
  const answer = await prompt<string>(message);

  if (answer.toLowerCase() === "y" || answer.toLowerCase() === "yes") {
    action();
  } else {
    mainMenu();
  }
}
