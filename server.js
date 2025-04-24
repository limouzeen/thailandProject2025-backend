const express = require('express');
const cors = require("cors");
const authRoutes = require('./routes/authRoutes');
const travelRoutes = require('./routes/travelRoutes');
require("dotenv").config();

const app = express(); 

const PORT = process.env.PORT || 3000;



app.use(cors({
  origin: "https://thailand-project2025.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Routes

app.use('/auth', authRoutes);
app.use('/travels', travelRoutes);
app.use('/images/travel', express.static('images/travel'))
// Default Route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Back-end server!.." });
});

//เทสโชว์
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT + "...");
});
  


