const fs = require('fs')
let getData = function () {
    return JSON.parse(fs.readFileSync('./db/data.json', 'utf8'))
}
const cars = getData();

module.exports.create = function (req, res) {
    const cars = getData();
    let postCar = {
        id: req.body.id,
        brand: req.body.brand,
        model: req.body.brand,
        engineVolume: req.body.engineVolume,
        year: req.body.year
    };
    let car = cars.find(function (car) {
        return car.id === postCar.id;
    });
    if (car) {
        res.status(409).send({
            message: 'Car already exists'
        })
    } else {
        cars.push(postCar)
        fs.writeFileSync('./db/data.json', JSON.stringify(cars))
        res.status(201).send(postCar)
    }
}

module.exports.carsList = function (req, res) {
    const cars = getData();
    res.status(200).send(cars)
};

module.exports.returnsCarById = function (req, res) {
    const cars = getData();
    const carId = req.params.id;
    let car = cars.find(function (car) {
        car.id === parseInt(carId);
    });
    if (car) {
        res.status(200).send(car)
    } else {
        res.status(404).send({
            message: 'Car with such id has not been found'
        })
    }
}

module.exports.updateCarById = function (req, res) {
    const cars = getData();
    const carId = req.params.id;
    let car = cars.find(function (car) {
        car.id === parseInt(carId);
    });
    if (car) {
        car.brand = req.body.brand;
        car.model = req.body.model;
        car.engineVolume = req.body.engineVolume;
        car.year = req.body.year;
        fs.writeFileSync('./db/data.json', JSON.stringify(cars))
        res.status(200).send(car)
    } else {
        res.status(404).send({
            message: 'Car with such id has not been found.'
        })
    }
}

module.exports.removesCarById = function () {
    const cars = getData();
    const carId = req.params.id;
    let car = cars.find(function (car) {
        car.id === parseInt(carId)
    });
    if (car) {
        cars.splice(cars.indexOf(car), 1);
        fs.writeFileSync('./db/data.json', JSON.stringify(cars))
        res.status(200).send({
            'message': 'The car has been successfully removed'
        });
    } else {
        res.status(404).send({
            message: 'Car with such id has not been found'
        })
    }
};