import getUserInput from "./helper/getUserInput";
import saveUserInput from "./helper/saveUserInput";

export default async function App() {
  const name = await getUserInput({
    label: "enter your name:",
  });
  const phone = await getUserInput({
    label: "enter your phone number:",
  });

  saveUserInput({ name, phone });
}
