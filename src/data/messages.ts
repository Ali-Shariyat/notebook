import { readFile } from "../helper/processFile";

const messages = readFile<{ [key: string]: string }>("src/data/messages.json");

export default messages;
