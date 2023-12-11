const Movie  = require('../models').Movie;
const crypto = require('crypto');

const getAllMovies = async () => {
  try {
    const movies = await Movie.findAll({
      order: [['created', 'DESC']]
    });
    if(movies){
      return movies;
    }
  } catch (error) {
    throw new Error(error);
  }
}

const findMovieById = async (id) => {
  try {
    const movie = await Movie.findByPk(id);
    if(movie){
      return movie;
    }
  } catch (error) {
    throw new Error(error);
  }
}

const getMoviesWatched = async (name) => {
  try {
    const movies = await Movie.findAll({
      where: {
        watched: true
      },
      order: [['created', 'DESC']]
    });
    if(movies){
      return movies;
    }
  } catch (error) {
    throw new Error(error);
  }
}

const createMovie = async (body) => {
  const {title, description } = body
  await Movie.findOne({
    where: {
      title: body.title
    }
  })
  .then(result =>{
    if(result){
      throw new Error('That Movie alreay exist');
    }
  });
  try {
    const id = crypto.randomUUID();
    const newMovie = await Movie.create({
      id_movie: id.trim(),
      title: title,
      description: description
    });
    return newMovie;
    
  } catch (error) {
    throw new Error(error);
  }
}

const updateMovie = async (id, body) => {
  try {
    const movie = await Movie.findByPk(id);
    if(movie){
      movie.update({
        title: body.title ? body.title : movie.title,
        description: body.description ? body.description : movie.description,
        watched: body.watched ? body.watched : movie.watched,
      })
    } else {
      throw new Error('Dont find that movie');
    }
    return movie
  } catch (error) {
    throw new Error(error);
  }
}

const deleteMovie = async (id) => {
  try {
    await Movie.destroy({
      where: {
        id_movie: id
      },
    });
    return true;
  } catch (error) {
    throw new Error('Cant remove the movie');
  }
}

module.exports = {
  getAllMovies,
  findMovieById,
  getMoviesWatched,
  createMovie,
  updateMovie,
  deleteMovie
};