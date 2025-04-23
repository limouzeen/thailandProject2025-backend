const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


const multer = require('multer');
const { storage } = require('../cloudinary'); // ไฟล์ cloudinary.js ที่เราจะสร้าง
const upload = multer({ storage });


router.post('/login', authController.loginUser);
router.post('/register', upload.single('userImage'), authController.registerUser);

module.exports = router;