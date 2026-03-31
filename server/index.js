import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js";
import product from "./routes/product.js";
import cart from "./routes/cart.js";
import order from "./routes/order.js";


const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use('/api/products', require('./routes/product'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/orders', require('./routes/order'));
app.use('/api/orders', require('./routes/order'));


app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});