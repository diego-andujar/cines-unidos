import { Movie } from './../../models/movie';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postpelicula',
  templateUrl: './postpelicula.component.html',
  styleUrls: ['./postpelicula.component.scss']
})
export class PostpeliculaComponent implements OnInit {

  @Input() movie = {} as Movie;
  
  constructor() { }

  ngOnInit(): void {
  }

}

