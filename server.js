const express = require('express');
const authRoutes = require('./routes/authRoutes');
const travelRoutes = require('./routes/travelRoutes');


app.use(express.json()); // แปลง JSON จาก request body
app.use(express.urlencoded({ extended: true })); // สำหรับ form-url-encoded (เช่นจาก HTML form)

const app = express();
const PORT = process.env.PORT || 4000;


app.use('/auth', authRoutes);

app.use('/travels', travelRoutes);


app.listen(PORT, () => {
    console.log("Server is running on port " + PORT + "...");
});