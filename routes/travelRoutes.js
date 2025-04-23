// travelRoutes.js
const express = require('express');
const router = express.Router();

const travelController = require('../controllers/travelController');
const multer = require('multer');
const { storage } = require('../cloudinary'); // 👈 เรียกจาก module.exports
const upload = multer({ storage }); // ✅ ต้องได้เป็น instance

router.post('/', upload.single('travelImage'), travelController.createTravel);

router.get('/', travelController.getAllTravels);
router.get('/:travelId', travelController.getTravelById);
router.put('/:travelId', upload.single('travelImage'), travelController.updateTravel);
router.delete('/:travelId', travelController.deleteTravel);
router.post('/:travelId/comments', travelController.createComment);

module.exports = router;
