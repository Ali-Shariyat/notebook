import * as fs from "fs";
import { type Interface } from "readline";

interface PropsFace {
  name: string;
  phone: string;
}
class JsonMaker {
  name: string;
  phone: string;
  rl: Interface;
  constructor(rl: Interface, { name, phone }: PropsFace) {
    this.name = name;
    this.phone = phone;
    this.rl = rl;
  }
  async updateFile() {
    await fs.readFile("user.json", "utf8", async (err, data) => {
      let users = [];
      if (err) {
        if (err.code === "ENOENT") {
          // File does not exist, create new file with the user
          users.push({ name: this.name, phone: this.phone });
        } else {
          console.error("Error reading file", err);
          return;
        }
      } else {
        // File exists, parse the content and add new user
        try {
          users = JSON.parse(data);
          users.push({ name: this.name, phone: this.phone });
        } catch (parseErr) {
          console.error("Error parsing JSON", parseErr);
          return;
        }
      }

      await fs.writeFile(
        "user.json",
        JSON.stringify(users, null, 2),
        (writeErr) => {
          if (writeErr) {
            console.error("Error writing to file", writeErr);
          } else {
          }
        }
      );
    });
  }
}

export default JsonMaker;
