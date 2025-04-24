const express = require('express');
const cors = require("cors");
const authRoutes = require('./routes/authRoutes');
const travelRoutes = require('./routes/travelRoutes');
require("dotenv").config();

const app = express(); 

const PORT = process.env.PORT || 3000;




// CORS ที่ปลอดภัยและยืดหยุ่น
// app.use(cors({
//   origin: function (origin, callback) {
//     const allowedOrigins = ['https://thailand-project2025.vercel.app'];
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true
// }));
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

// Default Route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Back-end server!.." });
});

//เทสโชว์
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT + "...");
});
  


