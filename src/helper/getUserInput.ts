import readline from "./readline";

interface UserInputRow {
  label: string;
}

export default async function getUserInput({ label }: UserInputRow) {
  return await new Promise<string>((resolve) => {
    readline.question(label, (answer: string) => {
      if (answer) resolve(answer);
      else resolve(getUserInput({ label }));
    });
  });
}
