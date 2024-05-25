const express = require("express"),
  sqlite = require("sqlite"),
  sqlite3 = require("sqlite3");

let database;
(async () => {
  database = await sqlite.open({
    driver: sqlite3.Database,
    filename: "earthy.sqlite",
  });

  await database.run("PRAGMA foreign_keys = ON");

  console.log("Redo att göra databasanrop");
})();

const app = express();
app.get("/", async (request, response) => {
  const products = await database.all("SELECT * FROM products");
  response.send(products);
});

app.listen(3000, () => {
  console.log("Redo på http://localhost:3000/");
});
