import { type Interface } from "readline";

interface PropsFace {
  label: string;
  close?: boolean;
}
const useGetUserData = (rl: Interface, { label, close = false }: PropsFace) => {
  return new Promise<string>((resolve, reject) => {
    rl.question(label, (answer) => {
      if (answer) {
        resolve(answer);
        if (close) {
          rl.close();
        }
        reject(new Error("No data provided"));
      }
    });
  }).then((answer) => answer);
};

export default useGetUserData;
