import { Movie } from './../../models/movie';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import firebase from "firebase";

@Component({
  selector: 'app-postpelicula',
  templateUrl: './postpelicula.component.html',
  styleUrls: ['./postpelicula.component.scss']
})
export class PostpeliculaComponent implements OnInit {

  userLiked = false;
  user: firebase.User = null;
  @Input() extendedView = false;
  @Input() movie = {} as Movie;
  
  
  constructor(
    private router: Router,
    private authService: AuthService,
    ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      this.user = user;
    })
  }

  shareMovie(movie: Movie) {
    this.extendedView = !this.extendedView;
  }

  favClick(){
    this.userLiked = true;
  }

  unfavClick(){
    this.userLiked = false;
  }

}

