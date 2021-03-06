import { MoviesService } from 'src/app/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/models/movie';
import { PageEvent } from '@angular/material/paginator';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  value: string = "";
  authForm!: FormGroup;
  lowValue: number = 0;
  highValue: number = 8;
  baseURL = "https://api.themoviedb.org/3/";
  configData = null;
  baseImageUrla = null;
  APIKEY = "?api_key=31cb4f58f5d02d7887a1b4eb89b216de&query=";
  moviesList: Array<Movie> = [];

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.authForm = this.fb.group({
      displayName: '' ,
    });
  }

  async onSubmit() {
    const formValues = {
      displayName: this.authForm.get('displayName').value,
    };
    this.value = formValues.displayName;
    console.log(this.value)
    this.getMovies(this.moviesList);
  }

  getMovies(listMovies){

    const url = "".concat(this.baseURL, "search/movie", this.APIKEY, this.value);

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
