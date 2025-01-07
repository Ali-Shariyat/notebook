import messages from "../data/messages";
import { createInterface } from "readline";

/**
 * Creates a readline interface for reading input from the user.
 */
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Prompts the user for input and returns the input value.
 * @param label - The prompt message to display to the user.
 * @param options - The options for the prompt, including the type of input.
 * @returns A promise that resolves to the user's input, either a string or a number.
 */
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
