import dotenv from "dotenv";
dotenv.config();

const saveOnDatabase = process.env.SAVE_ON_DATABASE === "true";

export default saveOnDatabase;
