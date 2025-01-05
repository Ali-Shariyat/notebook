import messages from "./messages";

const validatePhoneNumber = (phone: string): boolean => {
  const isValid = Number.isFinite(Number(phone));
  if (!isValid) console.log(messages.numberValidation);
  return isValid;
};

export { validatePhoneNumber };
