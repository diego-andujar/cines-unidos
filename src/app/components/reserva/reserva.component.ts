import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './../../models/movie';
import { MoviesService } from './../../services/movies.service';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

  baseURL = "https://api.themoviedb.org/3/";
  configData = null;
  baseImageUrla = null;
  APIKEY = "?api_key=31cb4f58f5d02d7887a1b4eb89b216de";
  moviesList: Array<Movie> = [];

  constructor(
    private movieService: MoviesService
  ) { }

  ngOnInit(): void {
    this.gettitles();
  }

  gettitles(){
    const value = 'titulo';
  }
  

}
