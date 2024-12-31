import { type Interface } from "readline";

interface PropsFace {
  label: string;
  close?: boolean;
  rl: Interface;
}
export default async function getUserInput({ label, rl }: PropsFace) {
  return await new Promise<string>((resolve) => {
    rl.question(label, (answer) => {
      if (answer) {
        resolve(answer);
      }
    });
  });
}
