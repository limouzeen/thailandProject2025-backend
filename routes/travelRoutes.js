const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travelController');
const multer = require('multer');
const { travelStorage } = require('../cloudinary'); //เรียกใช้ storage ที่ใช้สำหรับ travelImage

const uploadTravel = multer({ storage: travelStorage }); // ตั้งชื่อใหม่เพื่อความชัดเจน

//อัปโหลดรูปตอนสร้างและอัปเดต travel
router.post('/', uploadTravel.single('travelImage'), travelController.createTravel);
router.put('/:travelId', uploadTravel.single('travelImage'), travelController.updateTravel);

// routes อื่น ๆ ไม่เกี่ยวกับ upload
router.get('/', travelController.getAllTravels);
router.get('/:travelId', travelController.getTravelById);
router.delete('/:travelId', travelController.deleteTravel);
router.post('/:travelId/comments', travelController.createComment);
router.delete('/comments/:commentId', travelController.deleteComment);
router.put('/comments/:commentId', travelController.updateComment);


module.exports = router;
