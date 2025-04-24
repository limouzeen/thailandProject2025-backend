const express = require('express');
const cors = require("cors");
const authRoutes = require('./routes/authRoutes');
const travelRoutes = require('./routes/travelRoutes');
require("dotenv").config();

const app = express(); 

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "https://thailand-project2025.vercel.app/"
}));


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