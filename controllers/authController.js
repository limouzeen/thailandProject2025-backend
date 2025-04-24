const { PrismaClient } = require('../generated/prisma')

const prisma = new PrismaClient()

exports.loginUser = async (req, res) => {
  const { userEmail, userPassword } = req.body;

  try {
    const user = await prisma.user_tb.findUnique({
        where: { userEmail },
      });

      if (!user) {
        return res.status(401).json({ message: 'Email not found' });
      }

    // เปรียบเทียบรหัสผ่าน (สมมุติใช้ plain-text ถ้ายังไม่ hash)

    if (user.userPassword !== userPassword) {
        return res.status(401).json({ message: 'Incorrect password' });
      }

    // ถ้าอยากส่ง JWT ตรงนี้สามารถเพิ่มได้
    res.json({
      message: 'Login successful',
      user: {
        userId: user.userId,
        userName: user.userName,
        userEmail: user.userEmail,
        userImage: user.userImage,
      },
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Login failed' });
  }


  
};

const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
  console.log("🔥 Register process started");

  // 🔍 Log ข้อมูลที่ส่งมาจาก Frontend
  console.log("📩 Request body:", req.body);
  console.log("🖼 Uploaded file info:", req.file);

  const { userName, userEmail, userPassword } = req.body;
  const userImage = req.file ? req.file.path : ''; // ใช้ path ถ้าเก็บจาก Cloudinary

  try {
    // 🔍 ตรวจสอบว่ามี user ซ้ำในระบบหรือไม่
    const existingUser = await prisma.user_tb.findUnique({
      where: { userEmail: userEmail }, //userEmail ตั้ง unique ใน Prisma schema
    });

    if (existingUser) {
      console.log("⚠️ Email already exists:", userEmail);
      return res.status(400).json({ message: 'Email already exists' });
    }

    // สร้าง user ใหม่ในฐานข้อมูล
    const newUser = await prisma.user_tb.create({
      data: {
        userName,
        userEmail,
        userPassword,
        userImage,
      },
    });

    console.log("✅ New user registered:", newUser);

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        userId: newUser.userId,
        userName: newUser.userName,
        userEmail: newUser.userEmail,
        userImage: newUser.userImage,
      },
    });

  } catch (err) {
    console.error("❌ Error in registerUser:", err);
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};
