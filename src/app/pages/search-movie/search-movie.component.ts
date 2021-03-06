import { MoviesService } from 'src/app/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  authForm!: FormGroup;
  movieName: FormControl;
  constructor(
    private fb: FormBuilder,
    private movieService: MoviesService
  ) { }

  ngOnInit(): void {
  }

  createForm(): void {
    this.authForm = this.fb.group({
      movieName: '' ,
    });
  }

  showMoviesName(){
    
  }

  onSubmit(){
    const movie = this.movieName.value

  }
}
