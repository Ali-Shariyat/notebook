import { createInterface } from "readline";

import useGetUserData from "./components/get-user-data";
import JsonMaker from "./components/json-maker";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
const getUserData = async () => {
  const name = await useGetUserData(rl, {
    label: "enter your name:",
  });
  const phone = await useGetUserData(rl, {
    label: "enter your phone number:",
  });

  const jsonMaker = new JsonMaker(rl, { name, phone });
  jsonMaker.updateFile().then(askForAnotherUser);
  askForAnotherUser();
};

getUserData();
const askForAnotherUser = async () => {
  const answer = await useGetUserData(rl, {
    label: "do you want add another one?[y,n]",
  });
  if (answer === "y" || answer === "yes") {
    getUserData();
  } else {
    rl.close();
  }
};
