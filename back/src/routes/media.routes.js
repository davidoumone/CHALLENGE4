/* eslint camelcase: 0 */ // --> OFF
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

// Afficher tous les médias
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM media';
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

// Afficher un média
router.get('/:id', (req, res) => {
  const idMedia = req.params.id;
  const sql = 'SELECT * FROM media WHERE id = ?';
  connection.query(sql, [idMedia], (err, results) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.status(200).json(results);
    }
  });
});

// Afficher une image dans le carousel 
router.get('/search/:keyword', (req, res) => {
  const keyword = req.params.keyword;
  const sql = 'SELECT * FROM media WHERE keywords = ?';
  connection.query(sql, [keyword], (err, results) => {
    if (err) {
      res.status(500).json({ errorMessage: err.message });
    } else {
      console.log(results.length);
      res.status(200).json(results);
    }
  });
});

// Ajouter un média
router.post('/', validationData, (req, res) => {
  const {
    file_name, file_location, adding_date, media_type, keywords,
  } = req.body;
  let sql = 'SELECT * FROM media WHERE file_name=?';
  connection.query(sql, file_name, (errOne, resultsOne) => {
    if (errOne) {
      res.status(500).json({ errorMessage: errOne.message });
    } else if (resultsOne.length > 0) {
      res.status(401).json({ errorMessage: 'Ce nom de fichier est déjà utilisé' });
    } else {
      sql = 'INSERT INTO media SET ?';
      connection.query(
        sql,
        {
          file_name, file_location, adding_date, media_type, keywords,
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
  const idMedia = req.params.id;
  connection.query(
    'UPDATE media SET ? WHERE id = ?',
    [formData, idMedia],
    (err) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send(`Erreur lors de la modification du média : ${err.message}`);
      } else {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.sendStatus(200);
      }
    },
  );
});

// Supprimer un média
router.delete('/:id', (req, res) => {
  const idMedia = req.params.id;
  connection.query('DELETE FROM media WHERE id = ?', [idMedia], (err) => {
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