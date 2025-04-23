require('dotenv').config();

/**
 * Get all travels
 * @param {Request} req - HTTP request object
 * @param {Response} res - HTTP response object
 * @returns {Promise<void>}
 */
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'travel-images',
    allowed_formats: ['jpg', 'png'],
  },
});

export default { cloudinary, storage };