import { Movie } from './../models/movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesList: Array<Movie> = [];
  baseURL = "https://api.themoviedb.org/3/";
  configData = null;
  baseImageUrla = null;
  APIKEY = "31cb4f58f5d02d7887a1b4eb89b216de";
  

  constructor(
    private currentmovie: Movie,
  ) { }

  getMovies(listMovies){
    const value = "";
    const url = "".concat(this.baseURL, "discover/movie", this.APIKEY, value);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const moviesToAdd = data.results;
        this.createMovie(moviesToAdd, listMovies);
        console.log(data)
      })
      .catch((error) => {
        console.log("error: ", error)
      })
  }

  createMovie(listMovies, movielist){
    return listMovies.map((movie) => {
      const actMovie: Movie = {
        titulo: movie.original_title,
        idiomas: movie.original_language,
        imagen: "https://image.tmdb.org/t/p/w500/" + movie.poster_path,
        popularidad: movie.popularity,
        genre: movie.genre_ids,
        presupuesto: movie.id,
        descripccion: movie.overview,
        rating: movie.vote_average,
        productora: movie.vote_count,
        lanzamiento: movie.release_date,
        estado: movie.original_title,
      }
      movielist.push(actMovie);
      console.log(actMovie)
    })
  }

}
