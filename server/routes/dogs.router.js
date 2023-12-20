const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//This route gets all dogs from the database table dog_profiles
router.get('/', (req, res) => {
  const query = `
  SELECT * FROM "dog_profiles";
`;
pool.query(query)
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get all dogs', err);
    res.sendStatus(500)
  })
});

//This is the post router to create a new dog
router.post('/', (req, res) => {
  console.log(req.body);
  const insertNewDogQuery = `
    INSERT INTO "dog_profiles" 
    ("dog_name", "dog_sh_descr", "dog_lg_descr", "pic_url")
      VALUES
      ($1, $2, $3, $4);
  `;
  const insertNewDogValues = [
    req.body.dog_name,
    req.body.dog_sh_descr,
    req.body.dog_lg_descr,
    req.body.dog_url
]
  pool.query(insertNewDogQuery, insertNewDogValues)
    .then(result => {
      console.log('New Dog created')
      res.sendStatus(201)
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
});

module.exports = router;
