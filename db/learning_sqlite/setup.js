import { DatabaseSync } from "node:sqlite";
export const db = new DatabaseSync("test.db");
db.exec(
  `
	CREATE TABLE IF NOT EXISTS people (
	  id INTEGER PRIMARY KEY AUTOINCREMENT,
	  name TEXT,
	  age INTEGER
	);
  `,
);

export const insertData = db.prepare(
  `
	INSERT INTO people (name, age) VALUES (?, ?);
  `,
);
