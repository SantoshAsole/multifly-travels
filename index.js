require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const sliderRoutes = require("./routes/sliderRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/slider", sliderRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
