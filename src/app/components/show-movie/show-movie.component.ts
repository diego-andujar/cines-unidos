import { Observable } from 'rxjs';
import { Movie } from './../../models/movie';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MoviesService } from 'src/app/services/movies.service';

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
        genre: this.numberToString(movie.genre_ids),
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

  public numberToString(numbers: string): string{
    let generos: string = "";
    for (let i=0; i < numbers.length; i++){
      let is = numbers[i].toString();
      switch (is) {
        case "28":
            generos = generos +" Action,";
            break;
        case "12":
            generos = generos +" Adventure,";
            break;
        case "16":
            generos = generos +" Animation,";
            break;
        case "35":
            generos = generos +" Comedy,";
            break;
        case "80":
            generos = generos +" Crime,";
            break;
        case "99":
            generos = generos +" Documentary,";
            break;
        case "18":
            generos = generos +" Drama,";
            break;
        case "10751":
            generos = generos +" Family,";
            break;
        case "14":
            generos = generos +" Fantasy,";
            break;
        case "36":
            generos.concat(" History,");
            break;
        case "27":
            generos.concat(" Horror,");
            break;
        case "10402":
            generos.concat(" Music,");
            break;
        case "9648":
            generos.concat(" Mystery,");
            break;
        case "10749":
            generos.concat(" Romance,");
            break;
        case "878":
            generos.concat(" Science Fiction,");
            break;
        case "10770":
            generos.concat(" TV Movie,");
            break;
        case "53":
            generos.concat(" Thriller,");
            break;
        case "10752":
            generos.concat(" War,");
            break;
        case "37":
            generos.concat(" Western,");
            break;
        default:
            generos.concat(" Ninguno,");
            break;
      }
    }
    return generos;
  }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  pageSize: number = 8;
  pageNumber: number = 8;
}