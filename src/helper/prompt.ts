import messages from "../data/messages.json";
import inquirer from "inquirer";

async function prompt<T>(
  label: string,
  options: { type: "string" | "number" } = { type: "string" }
): Promise<T> {
  while (true) {
    const input = await inquirer
      .prompt([
        {
          type: "input",
          name: "item",
          message: label,
        },
      ])
      .then((answers) => answers.item);

    if (options.type === "number") {
      const numberValue = parseFloat(input);
      if (!isNaN(numberValue)) return numberValue as T;
      console.log(messages.invalidPhoneNumber);
    } else {
      return input as T;
    }
  }
}

export default prompt;
