require('dotenv').config();
const router = require('express').Router();
const Joi = require('@hapi/joi');
const connection = require('../db_connection');

const schema = Joi.object({
  file_name: Joi.string(),
  file_location: Joi.string(),
  adding_date: Joi.date(),
  media_type: Joi.string(),
  keywords: Joi.string(),
});

const validationData = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(401).json({ errorMessage: error.details[0].message });
  } else {
    next();
  }
};

// Afficher tous les description
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM description';
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
      res.setHeader('X-Total-Count', results.length);
      console.log(results.length);
      // Possible de juste mettre res.header(header).res.status
      res.status(200).json(results);
    }
  });
});

// Afficher une description
router.get('/:id', (req, res) => {
  const idDescription = req.params.id;
  const sql = 'SELECT * FROM description WHERE id = ?';
  connection.query(sql, [idDescription], (err, results) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(results[0]);
    }
  });
});




// Ajouter un média
router.post('/', validationData, (req, res) => {
    const {
      title, text, link, date,
    } = req.body;
    let sql = 'SELECT * FROM media WHERE title=?';
    connection.query(sql, title, (errOne, resultsOne) => {
      if (errOne) {
        res.status(500).json({ errorMessage: errOne.message });
      } else if (resultsOne.length > 0) {
        res.status(401).json({ errorMessage: 'Ce nom de fichier est déjà utilisé' });
      } else {
        sql = 'INSERT INTO description SET ?';
        connection.query(
          sql,
          {
            title, text, link, date,
          },
          (err, results) => {
            if (err) {
              res.status(500).json({ errorMessage: err.message });
            } else {
              console.log('id: ', results.insertId);
              sql = 'SELECT * FROM media WHERE id = ?';
              connection.query(sql, results.insertId, (errTwo, media) => {
                if (errTwo) {
                  res.status(500).json({ errorMessage: errTwo.message });
                } else {
                  res.setHeader('Access-Control-Allow-Origin', '*');
                  res.status(201).json(media);
                }
              });
            }
          },
        );
      }
    });
  });
  
  // Modifier un média
  router.put('/:id', validationData, (req, res) => {
    const formData = req.body;
    const idDescription = req.params.id;
    connection.query(
      'UPDATE description SET ? WHERE id = ?',
      [formData, idDescription],
      (err) => {
        if (err) {
          console.log(err);
          res
            .status(500)
            .send(`Erreur lors de la modification du description : ${err.message}`);
        } else {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.sendStatus(200);
        }
      },
    );
  });
  
  // Supprimer un média
  router.delete('/:id', (req, res) => {
    const idDescription = req.params.id;
    connection.query('DELETE FROM description WHERE id = ?', [idDescription], (err) => {
      if (err) {
        res
          .status(500)
          .send(`Erreur lors de la supression des données(${err.message})`);
      } else {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.sendStatus(200);
      }
    });
  });
  
  module.exports = router;