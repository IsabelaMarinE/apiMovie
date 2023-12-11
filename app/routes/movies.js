const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie_controller');
/* @swagger
  * /api/getListMovies:
  * get:
  * summary: getListMovies
  * description: Get list of movies.
  * schema: List
  *   id_movie: string
  *   title: string
  *   description: string
  *   watched: boolean
  *   created: date
  * responses:
  *   200:
  *     items: listMovies
  *     status: boolean
  *     error: 
  *   204:
  *     items: []
  *     state: false
  *     error: error message
*/
router.get('/getListMovies', movieController.getAllMovies);
router.get('/getMovieById/:id', movieController.getMovieById);
router.get('/getWatchedMovies',movieController.deleteMovieById);
router.post('/updatedMovieById/:id', movieController.updateMovieById);
router.post('/createMovie',movieController.createMovie);
router.delete('/deletMovieById/:id',movieController.geMoviesWatched);


module.exports = router;