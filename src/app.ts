import messages from "./global/messages";
import { getUserInput } from "./helper/readline";
import saveUserInput from "./helper/saveEngine";

export default async function App() {
  const name = await getUserInput({
    label: messages.enterName,
  });
  const phone = await getUserInput({
    label: messages.enterPhone,
  });

  saveUserInput({ name, phone });
}
