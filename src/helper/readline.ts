import messages from "../data/messages.json";
import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export async function prompt<T>(
  label: string,
  options: { type: "string" | "number" } = { type: "string" }
): Promise<T> {
  while (true) {
    const input = await new Promise<string>((resolve) => {
      readline.question(label, resolve);
    });

    if (options.type === "number") {
      const numberValue = parseFloat(input);
      if (!isNaN(numberValue)) return numberValue as T;
      console.log(messages.invalidPhoneNumber);
    } else {
      return input as T;
    }
  }
}

export default readline;
