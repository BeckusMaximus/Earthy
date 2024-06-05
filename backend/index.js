const express = require("express");
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
let database;

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

async function queryProductsByCategoryName(categoryName) {
  try {
    const query = `
      SELECT p.* 
      FROM products p
      JOIN categories c ON p.category_id = c.id
      WHERE c.name = ?`;
    const rows = await database.all(query, [categoryName]);
    return rows;
  } catch (error) {
    console.error("Database query error:", error);
    throw error;
  }
}

app.get("/categoryPage/:categoryName", async (request, response) => {
  const categoryName = request.params.categoryName;

  try {
    if (!database) {
      return response.status(500).send("Database is not initialized yet");
    }

    const products = await queryProductsByCategoryName(categoryName);
    response.json(products);
  } catch (error) {
    response.status(500).send("Internal Server Error");
  }
});

app.get("/productPage/:productId", async (request, response) => {
  const productId = request.params.productId;

  try {
    if (!database) {
      return response
        .status(500)
        .json({ error: "Database is not initialized yet" });
    }

    const productQuery = `SELECT * FROM products WHERE id = ?`;
    const product = await database.get(productQuery, [productId]);

    if (!product) {
      return response.status(404).json({ error: "Product not found" });
    }

    const reviewsQuery = `SELECT * FROM reviews WHERE product_id = ?`;
    const reviews = await database.all(reviewsQuery, [productId]);

    response.json({ product, reviews });
  } catch (error) {
    console.error("Error while querying product:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/productPage/:productId", async (request, response) => {
  const productId = request.params.productId;
  const { name, review_text } = request.body;

  try {
    if (!database) {
      return response
        .status(500)
        .json({ error: "Database is not initialized yet" });
    }

    const query = `INSERT INTO reviews (product_id, name, review_text) VALUES (?, ?, ?)`;
    const result = await database.run(query, [productId, name, review_text]);

    response.json({ id: result.lastID });
  } catch (error) {
    console.error("Error while inserting review:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/checkout", async (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});
