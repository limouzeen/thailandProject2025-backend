const express = require('express');
const cors = require("cors");
const authRoutes = require('./routes/authRoutes');
const travelRoutes = require('./routes/travelRoutes');


app.use(express.json()); // แปลง JSON จาก request body
app.use(express.urlencoded({ extended: true })); // สำหรับ form-url-encoded (เช่นจาก HTML form)

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use('/auth', authRoutes);
app.use('/travels', travelRoutes);


app.get("/", (req, res) => {
    res.json({ message: "Hello from Back-end server!.." });
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT + "...");
});