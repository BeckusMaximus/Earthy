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

    console.log("Database connection established");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
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

    console.log(`Fetching products for category name: ${categoryName}`);
    const products = await queryProductsByCategoryName(categoryName);
    response.json(products);
  } catch (error) {
    console.error("Error while querying products:", error);
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

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});

/* const express = require("express");
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

    console.log("Database connection established");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
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

    console.log(`Fetching products for category name: ${categoryName}`);
    const products = await queryProductsByCategoryName(categoryName);
    response.json(products);
  } catch (error) {
    console.error("Error while querying products:", error);
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

    const query = `SELECT * FROM products WHERE id = ?`;
    const product = await database.get(query, [productId]);

    if (!product) {
      return response.status(404).json({ error: "Product not found" });
    }

    response.json(product);
  } catch (error) {
    console.error("Error while querying product:", error);
    response.status(500).json({ error: "Internal Server Error" });
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

    const query = `SELECT * FROM reviews WHERE product_id = ?`;
    const reviews = await database.all(query, [productId]);

    response.json(reviews);
  } catch (error) {
    console.error("Error while querying reviews:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

// Ny rutt för att lägga till en ny recension med productId i URL:en
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

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
}); */

/* app.get("/products/:productId", async (request, response) => {
  const { productId } = request.params;

  try {
    if (!database) {
      return response
        .status(500)
        .json({ error: "Database is not initialized yet" });
    }

    const query = `SELECT * FROM reviews WHERE product_id = ?`;
    const reviews = await database.all(query, [productId]);

    response.json(reviews);
  } catch (error) {
    console.error("Error while fetching reviews:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to add a review for a product
app.post("/products/:productId", async (request, response) => {
  const { productId } = request.params;
  const { name, reviewText } = request.body;

  try {
    if (!database) {
      return response
        .status(500)
        .json({ error: "Database is not initialized yet" });
    }

    const query = `INSERT INTO reviews (product_id, name, review_text) VALUES (?, ?, ?)`;
    await database.run(query, [productId, name, reviewText]);

    response.status(201).json({ message: "Review added successfully" });
  } catch (error) {
    console.error("Error while adding review:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
}); */
