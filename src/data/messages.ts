import { readFile } from "../helper/processFile";

/**
 * Reads the messages from the JSON file and exports them.
 */
const messages = readFile<{ [key: string]: string }>("src/data/messages.json");

export default messages;
