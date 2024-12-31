import getUserInput from "./helper/getUserInput";
import saveUserInput from "./helper/saveUserInput";
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export default async function notebookApp() {
  const name = await getUserInput({
    rl,
    label: "enter your name:",
  });
  const phone = await getUserInput({
    rl,
    label: "enter your phone number:",
  });

  saveUserInput({ name, phone, rl });
}
