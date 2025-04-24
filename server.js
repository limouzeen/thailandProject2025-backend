const express = require('express');
const cors = require("cors");
const authRoutes = require('./routes/authRoutes');
const travelRoutes = require('./routes/travelRoutes');
require("dotenv").config();

const app = express(); 

const PORT = process.env.PORT || 3000;





//  แนะนำให้ใส่ multer ก่อน middleware body parser
app.use(cors({
  origin: "https://thailand-project2025.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

// เพิ่ม limit ให้รองรับรูปใหญ่ขึ้น (เช่น 10MB)
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));




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
  


