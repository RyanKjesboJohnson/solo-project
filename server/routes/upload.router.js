const express = require("express");
// const {
//   rejectUnauthenticated,
// } = require("../modules/authentication-middleware");
const pool = require("../modules/pool");
const router = express.Router();
const cloudinaryUpload = require("../modules/cloudinary.config");

router.post("/", cloudinaryUpload.single("image"), async (req, res) => {
    const imageUrl = req.file.path;
    const dogName = req.body.dogNameInput;
    // const userId = req.user.id;
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
            res.sendStatus(201)
          })
          .catch((err) => {
            console.log(err);
            res.sendStatus(500);
          });
        });

module.exports = router;
