//The cloudinary.config.js page is used to create middleware that will utilize multer and cloudinary.
//It will store dog pictures in cloudinary and return the link.
//It pulls the cloudinary credentials from the env file.

const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
});

const upload = multer({ storage: storage })


module.exports = upload;