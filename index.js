const express = require('express');
const app = express();
const { cars } = require('./models');
// const bodyParser = require('body-parser');
const formidable = require('express-formidable');
const port = 8000;

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(formidable());

const createCarsHandler = (req, res) => {
  cars
    .create({
      name: req.body.name,
      rent_price: req.body.rent_price,
      size: req.body.size,
      image_url: req.body.image_url,
    })
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((err) => {
      res.status(500).json("Can't create cars");
    });
};

app.post('/cars', createCarsHandler);

app.listen(port, () => {
  console.log('Server running at http://localhost:8000');
});
