import { db, insertData } from "./setup.js";

db.exec(
  `
	CREATE TABLE IF NOT EXISTS people (
	  id INTEGER PRIMARY KEY AUTOINCREMENT,
	  name TEXT,
	  age INTEGER
    );
    `,
);

db.prepare("DELETE FROM people").run();

db.exec("BEGIN transaction");

for (let id = 0; id < 1000000; id++) {
  insertData.run("name", id);
}

db.exec("COMMIT transaction");

const rows = db.prepare("SELECT * FROM people").all();

console.table(rows);

db.close();
