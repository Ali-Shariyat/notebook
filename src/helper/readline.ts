import messages from "../data/messages";
import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function prompt(
  label: string,
  options: { type: "string" | "number" } = { type: "string" }
): Promise<string | number> {
  while (true) {
    const input = await new Promise<string>((resolve) => {
      readline.question(label, resolve);
    });

    if (options.type === "number") {
      const numberValue = parseFloat(input);
      if (!isNaN(numberValue)) return numberValue;
      console.log(messages.invalidPhoneNumber);
    } else {
      return input;
    }
  }
}

export default readline;
