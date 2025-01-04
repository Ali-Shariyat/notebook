import readline from "./readline";

interface GetUserInputRaw {
  label: string;
}

export default async function getUserInput({ label }: GetUserInputRaw) {
  return await new Promise<string>((resolve) => {
    readline.question(label, (answer: string) => {
      if (answer) {
        resolve(answer);
      }
    });
  });
}
