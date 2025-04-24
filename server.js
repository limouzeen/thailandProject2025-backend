const express = require('express');
const cors = require("cors");
const authRoutes = require('./routes/authRoutes');
const travelRoutes = require('./routes/travelRoutes');
require("dotenv").config();

const app = express(); 

const PORT = process.env.PORT || 3000;


const cors = require('cors');

// CORS ที่ปลอดภัยและยืดหยุ่น
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = ['https://thailand-project2025.vercel.app'];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// เสริม header เองอีกชั้น (กันบางเคสไม่ยิง header)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://thailand-project2025.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

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
  


// const express = require('express');
// const app = express();
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// const travelRoutes = require('./routes/travelRoutes');

// // ⭐ ใส่ middleware สำหรับ parse body

// app.use(cors());
// app.use(cors({
//   origin: 'http://localhost:4859' // 👈 ตรงกับ frontend
// }));
// app.use(express.json()); // แปลง JSON จาก request body
// app.use(express.urlencoded({ extended: true })); // สำหรับ form-url-encoded (เช่นจาก HTML form)




// app.use('/auth', authRoutes);

// app.use('/travels', travelRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));