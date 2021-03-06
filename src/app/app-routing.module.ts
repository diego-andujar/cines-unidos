import { SearchMovieComponent } from './pages/search-movie/search-movie.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "log-in", component: LogInComponent },
  { path: "searcher", component: SearchMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
