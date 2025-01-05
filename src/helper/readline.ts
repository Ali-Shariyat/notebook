import { createInterface } from "readline";
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface userInputRow {
  label: string;
}

export async function getUserInput({ label }: userInputRow) {
  return await new Promise<string>((resolve) => {
    readline.question(label, (answer: string) => {
      if (answer) resolve(answer);
      else resolve(getUserInput({ label }));
    });
  });
}

export default readline;
