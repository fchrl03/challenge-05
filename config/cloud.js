const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'ISI_PUNYA_MASING2',
  api_key: 'ISI_PUNYA_MASING2',
  api_secret: 'ISI_PUNYA_MASING2',
  secure: true,
});

module.exports = cloudinary;
