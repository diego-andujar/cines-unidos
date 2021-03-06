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

  currentMovie(movie: Movie){
    this.currentmovie = movie;
  }

  shareCurrentMovie(): Movie {
    return this.currentmovie;
  }

  showMoviesByname(name: string){

  }
  
}
