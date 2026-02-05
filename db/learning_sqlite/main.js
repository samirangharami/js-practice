import { db } from "./setup.js";

const placeHolder = Array(100).fill("(?, ?)");
const insertionValues = Array(100).fill(["name", 96]);

const insert = db.prepare(
  `
	INSERT INTO people (name, age) VALUES ${placeHolder.join(",")};
  `,
);

insert.run(...insertionValues.flatMap((x) => x));

const rows = db.prepare("SELECT * FROM people").all();

console.table(rows);

db.close();
