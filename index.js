const express = require('express');
const app = express();
const { cars } = require('./models');
// const bodyParser = require('body-parser');
// const formidable = require('express-formidable');
const port = 8000;
const upload = require('./helpers/fileUploadCloudinary');
const cloudinary = require('./config/cloudinary');

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(formidable());

const getCarsHandler = (req, res) => {
  cars.findAll().then((car) => {
    res.status(200).json(car);
  });
};

const getDetailCarsHandler = (req, res) => {
  // console.log(req.query);
  cars.findByPk(req.params.id).then((car) => {
    res.status(200).json(car);
  });
};

const createCarsHandler = (req, res) => {
  const fileToUpload = req.file;

  const fileBase64 = fileToUpload.buffer.toString('base64');
  const file = `data:${fileToUpload.mimetype};base64,${fileBase64}`;

  cloudinary.uploader.upload(file, (err, result) => {
    if (err) {
      res.status(400).send(`Gagal mengupload file ke cloudinary: ${err.message}`);

      return;
    }
    cars
      .create({
        name: req.body.name,
        rent_price: req.body.rent_price,
        size: req.body.size,
        image_url: result.url,
      })
      .then(function () {
        res.status(201).json('Berhasil insert data ke database');
        return;
      })
      .catch((err) => {
        res.status(500).json("Can't create cars");
        return;
      });
  });
};

const updateCarHandler = (req, res) => {
  const fileToUpload = req.file;

  const fileBase64 = fileToUpload.buffer.toString('base64');
  const file = `data:${fileToUpload.mimetype};base64,${fileBase64}`;

  cloudinary.uploader.upload(file, (err, result) => {
    if (err) {
      res.status(400).send(`Gagal mengupload file ke cloudinary: ${err.message}`);

      return;
    }

    cars
      .update(
        {
          name: req.body.name,
          rent_price: req.body.rent_price,
          size: req.body.size,
          image_url: result.url,
        },
        {
          where: { id: req.params.id },
        }
      )
      .then(() => {
        res.status(201).send('Berhasil update car');
      })
      .catch((err) => {
        res.status(422).json("Can't update cars");
      });
  });
};

const deleteCarsHandler = (req, res) => {
  cars
    .destroy({
      where: { id: req.params.id },
    })
    .then(() => res.status(200).send('Berhasil menghapus data'))
    .catch((err) => {
      res.status(404).send(err);
    });
};

app.get('/cars', getCarsHandler);
app.get('/cars/:id', getDetailCarsHandler);
app.post('/cars', upload.single('picture'), createCarsHandler);
app.put('/cars/:id', upload.single('picture'), updateCarHandler);
app.delete('/cars/:id', deleteCarsHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
