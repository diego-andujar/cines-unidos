import { Observable } from 'rxjs';
import { Movie } from './../../models/movie';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.scss']
})
export class ShowMovieComponent implements OnInit {

  lowValue: number = 0;
  highValue: number = 8;
  baseURL = "https://api.themoviedb.org/3/";
  configData = null;
  baseImageUrla = null;
  APIKEY = "?api_key=31cb4f58f5d02d7887a1b4eb89b216de";
  moviesList: Array<Movie> = [];

  constructor(
  ) { }

  ngOnInit(): void {
    this.getMovies(this.moviesList);
  }

  getMovies(listMovies){
    const value = "&query=furious";
    const url = "".concat(this.baseURL, "search/movie", this.APIKEY, value);

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
    })
  }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  pageSize: number = 8;
  pageNumber: number = 8;
}