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

//This route gets an individual dog profile by id
router.get('/:id', (req, res) => {
  const query = `
  SELECT * FROM "dog_profiles"
  WHERE "id" = $1;
`;
  const values = [Number(req.params.id)];

pool.query(query, values)
  .then(result => {
    res.send(result.rows[0]);
    console.log(result.rows[0]);
  })
  .catch(err => {
    console.log('ERROR: Get dog of id', req.params.id, err);
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
    req.body.pic_url
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

//This route deletes a dog profile of the ID sent over in the params
router.delete('/:id', (req, res) => {
  const deleteDogQuery = `
  DELETE FROM "dog_profiles"
  WHERE "id" = $1;
`;
  const deleteDogValues = [
    Number(req.params.id)
  ]

pool.query(deleteDogQuery, deleteDogValues)
  .then(result => {
    console.log('Dog deleted')
    res.sendStatus(202)
  })
  .catch(err => {
    console.log('ERROR: delete dog', err);
    res.sendStatus(500)
  })
});

module.exports = router;
