const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/database.db", (err) => {
  if (err) {
    console.error("Error connecting to database:", err.message);
  }
});

module.exports = db;
