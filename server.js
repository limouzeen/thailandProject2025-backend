const express = require('express');
const cors = require("cors");
const authRoutes = require('./routes/authRoutes');
const travelRoutes = require('./routes/travelRoutes');

const app = express(); 


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoutes);
app.use('/travels', travelRoutes);

// Default Route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Back-end server!.." });
});

// ส่งออก app เพื่อให้ Vercel ใช้ (ห้าม listen)
module.exports = app;
