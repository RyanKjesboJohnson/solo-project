const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const cloudinaryUpload = require("../modules/cloudinary.config");

//This post route sends a new dog profile to the server.
//It also injects the cloudinary.config page in as middleware and brings back the file path
router.post("/", cloudinaryUpload.single("image"), async (req, res) => {
    const imageUrl = req.file.path;
    const dogName = req.body.dogNameInput;
    const dogShDesc = req.body.dogShDescInput;
    const dogLgDesc = req.body.dogLgDescInput;
  
    const dogQuery = `
      INSERT INTO "dog_profiles" 
        ("pic_url", "dog_name", "dog_sh_descr", "dog_lg_descr")
        VALUES
        ($1, $2, $3, $4)
        RETURNING "id";
    `;
    const dogValues = [imageUrl, dogName, dogShDesc, dogLgDesc];
  
    pool
      .query(dogQuery, dogValues)
          .then((result) => {
            console.log('New dog profile created:', result);
            res.sendStatus(201)
          })
          .catch((err) => {
            console.log(err);
            res.sendStatus(500);
          });
        });

module.exports = router;
