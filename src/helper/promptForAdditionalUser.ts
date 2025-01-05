import messages from "../global/messages";
import App from "../app";
import readline, { getUserInput } from "./readline";

export default async function promptForAdditionalUser() {
  const answer = await getUserInput({
    label: messages.anotherUser,
  });
  if (answer.toLowerCase() === "y" || answer.toLowerCase() === "yes") {
    App();
  } else {
    readline.close();
  }
}
