const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

const multer = require('multer');
const { userStorage } = require('../cloudinary'); 
const uploadUser = multer({ storage: userStorage }); 

router.post('/login', authController.loginUser);

// 👇 ใช้ uploadUser แทน upload
router.post('/register', uploadUser.single('userImage'), authController.registerUser);

module.exports = router;
