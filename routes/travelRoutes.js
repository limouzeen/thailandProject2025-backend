const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travelController');
const {storage} = require('../cloudinary');


const multer = require('multer');
const upload = multer({ storage });


router.post('/', upload.single('travelImage'), travelController.createTravel);



router.get('/', travelController.getAllTravels);
router.get('/:travelId', travelController.getTravelById);
router.put('/:travelId', upload.single('travelImage'), travelController.updateTravel);
router.delete('/:travelId', travelController.deleteTravel);
router.post('/:travelId/comments', travelController.createComment);

console.log("upload.single is", typeof upload.single);
console.log("createTravel is", typeof travelController.createTravel);


module.exports = router;


// const express = require('express');
// const router = express.Router();
// const travelController = require('../controllers/travelController');

// const multer = require('multer');
// const { storage } = require('../cloudinary'); // ไฟล์ cloudinary.js ที่เราจะสร้าง
// const upload = multer({ storage });



// router.post('/', upload.single('travelImage'), travelController.createTravel);



// router.get('/', travelController.getAllTravels);
// router.get('/:travelId', travelController.getTravelById);
// router.put('/:travelId', upload.single('travelImage'), travelController.updateTravel);
// router.delete('/:travelId', travelController.deleteTravel);
// router.post('/:travelId/comments', travelController.createComment);

// module.exports = router;