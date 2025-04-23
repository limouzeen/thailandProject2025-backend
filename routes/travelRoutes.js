const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travelController');
const {storage} = require('../cloudinary');


const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
router.post('/', upload.single('travelImage'), travelController.createTravel);



router.get('/', travelController.getAllTravels);
router.post('/', upload.single('travelImage'), travelController.createTravel);
router.get('/:travelId', travelController.getTravelById);
router.put('/:travelId', upload.single('travelImage'), travelController.updateTravel);
router.delete('/:travelId', travelController.deleteTravel);
router.post('/:travelId/comments', travelController.createComment);

module.exports = router;