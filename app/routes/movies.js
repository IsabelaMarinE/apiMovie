const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie_controller');

router.get('/getListMovies', movieController.getAllMovies);
router.get('/getMovieById/:id', movieController.getMovieById);
router.get('/getWatchedMovies',movieController.geMoviesWatched);
router.post('/createMovie',movieController.createMovie);
router.post('/updatedMovieById/:id', movieController.updateMovieById);
router.delete('/deletMovieById/:id',movieController.deleteMovieById);


module.exports = router;