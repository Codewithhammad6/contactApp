import express from "express";
const app = express();

import ContactRoutes from "./routes/contact.route.js";
import { connectDB } from "./config/database.js";

const PORT = process.env.PORT;

connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/", ContactRoutes);

app.listen(PORT, () => {
  console.log(`Successfully Connected http://localhost:${PORT}`);
});
