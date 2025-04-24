const { PrismaClient } = require('../generated/prisma')

const prisma = new PrismaClient()

exports.loginUser = async (req, res) => {
  const { userEmail, userPassword } = req.body;

  console.log("📥 loginUser called");
  console.log("📩 userEmail:", userEmail);
  console.log("🔒 userPassword:", userPassword);

  try {
    const user = await prisma.user_tb.findUnique({
      where: { userEmail },
    });

    console.log("👤 Found user:", user);

    if (!user) {
      return res.status(401).json({ message: 'Email not found' });
    }

    if (user.userPassword !== userPassword) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

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
    console.error("❌ Error during login:", err);
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};


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
