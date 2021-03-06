import { Movie } from './../../models/movie';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-extend-view',
  templateUrl: './movie-extend-view.component.html',
  styleUrls: ['./movie-extend-view.component.scss']
})
export class MovieExtendViewComponent implements OnInit {

  currentMovie: Movie;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
