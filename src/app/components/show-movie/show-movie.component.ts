import { Observable } from 'rxjs';
import { Movie } from './../../models/movie';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.scss']
})
export class ShowMovieComponent implements OnInit {

  baseURL = "https://api.themoviedb.org/3/";
  configData = null;
  baseImageUrla = null;
  APIKEY = "?api_key=31cb4f58f5d02d7887a1b4eb89b216de";
  moviesList: Array<Movie> = [];

  constructor(
    private movieService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(){
    const value = "&query=furious";
    const url = "".concat(this.baseURL, "search/movie", this.APIKEY, value);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const moviesToAdd = data.results;
        this.createMovie(moviesToAdd);
        console.log("Data: ", data);
      })
      .catch((error) => {
        console.log("error: ", error)
      })
    console.log("value: ", value);
  }

  getAllMovies(listMovies): Observable<Movie[]>{
    return listMovies.map((changes) => {
      return changes.map((movie) => ({
        titulo: movie.original_title,
        idiomas: movie.original_language,
        imagen: movie.poster_path,
        popularidad: movie.popularity,
      }));
    })
  }

  createMovie(listMovies){
    return listMovies.map((movie) => {
      const actMovie: Movie = {
        titulo: movie.original_title,
        idiomas: movie.original_language,
        imagen: movie.poster_path,
        popularidad: movie.popularity,
      }
      this.moviesList.push(actMovie);
    })
  }

  getConfig(){
    const url = "".concat(this.baseURL, "configuration?api_key=", this.APIKEY)
    fetch(url).then((result) => {
      return result.json();
    })
    .then((data) => {
      this.baseImageUrla = data.images.secure_base_url;
      this.configData = data.images;
      console.log("config:", data);
      console.log("config fetched");
      this.runSearch("up");
    }).catch(function(err) {
      alert(err);
    })
  }

  runSearch(keyword: string) {
    const url = "".concat(this.baseURL, "configuration?api_key=", this.APIKEY)
    fetch(url).then(result =>
      result.json()).then((data) => {
        console.log( JSON.stringify(data, null, 4));
        console.log(document)
      })
    
  } 
}
