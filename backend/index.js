const express = require("express");
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
let database; // Variabel för att lagra databasanslutningen

(async () => {
  try {
    database = await sqlite.open({
      driver: sqlite3.Database,
      filename: "earthy.sqlite",
    });

    await database.run("PRAGMA foreign_keys = ON");

    console.log("Databasen är igång");
  } catch (error) {
    console.error("Gick inte att starta databasen", error);
  }
})();

// Hämtar produkter baserat på kategorinamn
app.get("/categoryPage/:categoryName", async (request, response) => {
  const categoryName = request.params.categoryName;

  try {
    if (!database) {
      return response.status(500).send("Database is not initialized");
    }

    const query = `
      SELECT p.* 
      FROM products p
      JOIN categories c ON p.category_id = c.id
      WHERE c.name = ?`;
    const products = await database.all(query, [categoryName]);

    response.json(products);
  } catch (error) {
    response.status(500).send("Internal server error");
  }
});

// Hämtar produkt och dess recensioner baserat på produkt ID
app.get("/productPage/:productId", async (req, res) => {
  const productId = req.params.productId;

  try {
    if (!database) {
      return res.status(500).json("Database is not initialized");
    }

    const product = await database.get("SELECT * FROM products WHERE id = ?", [
      productId,
    ]);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const reviews = await database.all(
      "SELECT * FROM reviews WHERE product_id = ?",
      [productId]
    );

    res.json({ product, reviews });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});
// Lägger till en recension baserat på produkt ID
app.post("/productPage/:productId", async (req, res) => {
  const productId = req.params.productId;
  const { name, review_text } = req.body;

  try {
    if (!database) {
      return res.status(500).json("Database is not initialized");
    }

    const result = await database.run(
      "INSERT INTO reviews (product_id, name, review_text) VALUES (?, ?, ?)",
      [productId, name, review_text]
    );

    res.json({ id: result.lastID });
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

/* Mennigen var att jag skulle lägga in order informationen in i databas tabellen orders men tiden fanns inte till då jag fick prioriteran annat. */
/* app.post("/checkout", async (req, res) => {}); */

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});
