import notebookApp from "../app";
import getUserInput from "./getUserInput";
import readline from "./readline";

export default async function promptForAdditionalUser() {
  const answer = await getUserInput({
    label: "Do you want to add another user? [y/n]",
  });
  if (answer.toLowerCase() === "y" || answer.toLowerCase() === "yes") {
    notebookApp();
  } else {
    readline.close();
  }
}
