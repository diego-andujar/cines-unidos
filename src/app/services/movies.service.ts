import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseURL = "https://api.themoviedb.org/3/";
  configData = null;
  baseImageUrla = null;
  APIKEY = "31cb4f58f5d02d7887a1b4eb89b216de";

  constructor() { }

  getMoviesByWord(listMovies){
    const value = "&query=furious";
    const url = "".concat(this.baseURL, "search/movie", this.APIKEY, value);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const moviesToAdd = data.results;
        this.createMovieByWord(moviesToAdd, listMovies);
        console.log(data)
      })
      .catch((error) => {
        console.log("error: ", error)
      })
  }

  createMovieByWord(listMovies, movielist){
    return listMovies.map((movie) => {
      const actMovie: Movie = {
        titulo: movie.original_title,
        idiomas: movie.original_language,
        imagen: "https://image.tmdb.org/t/p/w500/" + movie.poster_path,
        popularidad: movie.popularity,
      }
      movielist.push(actMovie);
    })
  }
  
}
