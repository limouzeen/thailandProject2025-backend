const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const travelRoutes = require('./routes/travelRoutes');

// ⭐ ใส่ middleware สำหรับ parse body


app.use(express.json()); // แปลง JSON จาก request body
app.use(express.urlencoded({ extended: true })); // สำหรับ form-url-encoded (เช่นจาก HTML form)




app.use('/auth', authRoutes);

app.use('/travels', travelRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

