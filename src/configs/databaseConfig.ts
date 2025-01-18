import dotenv from "dotenv";
dotenv.config();

const databaseEngine = process.env.DATABASE_ENGINE || "json";

export default databaseEngine;
