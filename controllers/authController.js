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



exports.registerUser = async (req, res) => {
  const { userName, userEmail, userPassword } = req.body;
  const userImage = req.file ? req.file.filename : '';

  try {
    const existingUser = await prisma.user_tb.findUnique({
      where: { userEmail },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = await prisma.user_tb.create({
      data: {
        userName,
        userEmail,
        userPassword,
        userImage,
      },
    });

    res.status(201).json({ message: 'User registered successfully', user: newUser });

  } catch (err) {
    console.error('🔴 Register Error:', err); // ✅ แทรก log
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};

  