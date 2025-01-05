import messages from "../global/messages";
import notebookApp from "../app";
import getUserInput from "./getUserInput";
import readline from "./readline";

export default async function promptForAdditionalUser() {
  const answer = await getUserInput({
    label: messages.anotherUser,
  });
  if (answer.toLowerCase() === "y" || answer.toLowerCase() === "yes") {
    notebookApp();
  } else {
    readline.close();
  }
}
