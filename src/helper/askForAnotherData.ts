import App from "../app";
import messages from "../data/messages.json";
import readline, { prompt } from "./readline";

export default async function askForAnotherData() {
  const answer = await prompt<string>(messages.askForAnother);

  if (answer.toLowerCase() === "y" || answer.toLowerCase() === "yes") {
    App();
  } else {
    readline.close();
  }
}
