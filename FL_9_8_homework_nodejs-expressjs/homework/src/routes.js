const express = require('express');
const bodyParser = require('body-parser');
const cars = require('./handlers/car');
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
}));

router.post('/car', cars.create);
router.get('/car', cars.carsList);
router.get('/car/:id', cars.returnsCarById);
router.put('/car/:id', cars.updateCarById);
router.delete('/car/:id', cars.removesCarById);

module.exports = router;