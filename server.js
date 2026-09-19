import express from "express";

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Hello from Express!",
    success: true,
  });
});

// Products data

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
  },
  {
    id: 2,
    name: "Phone",
    price: 700,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 300,
  },
];

// Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Get one product
app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((product) => product.id === id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json(product);
});

app.get("/products/:id", (req, res) => {
  console.log(req.params);
});
app.get("/products/:id/:name", (req, res) => {
  console.log(req.params);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
