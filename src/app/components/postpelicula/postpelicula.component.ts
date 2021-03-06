import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from './../../models/movie';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-postpelicula',
  templateUrl: './postpelicula.component.html',
  styleUrls: ['./postpelicula.component.scss']
})
export class PostpeliculaComponent implements OnInit {

  @Input() extendedView = false;
  @Input() movie = {} as Movie;
  
  
  constructor(
    private router: Router,
    ) {}

  ngOnInit(): void {
  }

  shareMovie(movie: Movie) {
    this.extendedView = true;
  }

}

