import App from "../app";
import messages from "../data/messages";
import readline, { prompt } from "./readline";

/**
 * Asks the user if they want to add another contact and handles the response.
 */
export default async function askForAnotherData() {
  const answer = (await prompt(messages.askForAnother)) as string;

  if (answer.toLowerCase() === "y" || answer.toLowerCase() === "yes") {
    App();
  } else {
    readline.close();
  }
}
