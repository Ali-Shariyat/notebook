import notebookApp from "../app";
import getUserInput from "./getUserInput";
import { type Interface } from "readline";

interface PropsFace {
  rl: Interface;
}

export default async function promptForAdditionalUser({ rl }: PropsFace) {
  const answer = await getUserInput({
    rl,
    label: "Do you want to add another user? [y/n]",
  });
  if (answer.toLowerCase() === "y" || answer.toLowerCase() === "yes") {
    notebookApp();
  } else {
    rl.close();
  }
}
