const movieServices = require('../services/movie.Service');

exports.createMovie= async (req, res, next) => {
  const { body } = req;
  console.log("body",body)
  try {
    const newMovie =  await movieServices.createMovie(body);
    if(newMovie){
      res.status(200).json({
        items: newMovie,
        state: true,
        error: ''
      })
    }else{
      res.status(204).json({
        items: [],
        state: false,
        error: 'Not Found'
      })
    }
  } catch (error) {
    res.status(500).json({
      state: false,
      error: error.message,
    });
  }
}

exports.getAllMovies = async (req, res, next) => {
  try {
    const listMovies =  await movieServices.getAllMovies();
    if(listMovies){
      res.status(200).json({
        items: listMovies,
        state: true,
        error: ''
      })
    }else{
      res.status(204).json({
        items: [],
        state: false,
        error: 'Not Found'
      })
    }
  } catch (error) {
    res.status(500).json({
      state: false,
      error: error.message,
    });
  }
}

exports.updateMovieById = async (req, res, next) => {
  const id = req.params.id;
  const { body } = req;
  try {
    const movie =  await movieServices.updateMovie(id, body);
    if(movie){
      res.status(200).json({
        items: movie,
        state: true,
        error: ''
      })
    }else{
      res.status(204).json({
        items: [],
        state: false,
        error: 'Not Found'
      })
    }
  } catch (error) {
    res.status(500).json({
      state: false,
      error: error.message,
    });
  }
}

exports.getMovieById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const movie =  await movieServices.findMovieById(id);
    if(movie){
      res.status(200).json({
        items: movie,
        state: true,
        error: ''
      })
    }else{
      res.status(204).json({
        items: [],
        state: false,
        error: 'Not Found'
      })
    }
  } catch (error) {
    res.status(500).json({
      state: false,
      error: error.message,
    });
  }
}

exports.deleteMovieById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const isMovieDeleted =  await movieServices.deleteMovie(id);
    if(isMovieDeleted){
      res.status(200).json({
        state: true,
        error: 'Deleted'
      })
    }else{
      res.status(204).json({
        state: false,
        error: 'Not Found'
      })
    }
  } catch (error) {
    res.status(500).json({
      state: false,
      error: error.message,
    });
  }
}

exports.geMoviesWatched = async (req, res, next) => {
  try {
    const listMovies = await movieServices.getMoviesWatched();
    if(listMovies){
      res.status(200).json({
        items: listMovies,
        state: true,
        error: ''
      })
    }else{
      res.status(204).json({
        items: [],
        state: false,
        error: 'Not Found'
      })
    }
  } catch (error) {
    res.status(500).json({
      state: false,
      error: error.message,
    });
  }
}