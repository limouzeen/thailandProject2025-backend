const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // หรือจะใช้ diskStorage ก็ได้

router.post('/login', authController.loginUser);
router.post('/register', upload.single('userImage'), authController.registerUser);

module.exports = router;