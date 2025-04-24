require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const path = require('path');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET.trim(),
});

// 📸 Storage สำหรับ travelImage
const travelStorage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const fileName = 'travel_' + Date.now() + path.extname(file.originalname);
    return {
      folder: 'images/travel',
      allowed_formats: ['jpg', 'png'],
      public_id: fileName,
    };
  },
});

// 👤 Storage สำหรับ userImage
const userStorage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const fileName = 'user_' + Date.now() + path.extname(file.originalname);
    return {
      folder: 'images/user',
      allowed_formats: ['jpg', 'png'],
      public_id: fileName,
    };
  },
});

module.exports = {
  cloudinary,
  travelStorage,
  userStorage,
};
