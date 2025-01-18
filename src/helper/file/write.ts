import { writeFileSync } from "fs";

interface SaveRow {
  fileName: string;
  data?: any;
}

export function write({ fileName, data }: SaveRow) {
  try {
    writeFileSync(fileName, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {}
}

export { write as writeJson };
