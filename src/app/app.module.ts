import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import { ListapeliComponent } from './components/listapeli/listapeli.component';
import { PostpeliculaComponent } from './components/postpelicula/postpelicula.component';
import {MatCardModule} from '@angular/material/card';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { ListadepeliculasComponent } from './pages/listadepeliculas/listadepeliculas.component';
import { DetallepeliculaComponent } from './pages/detallepelicula/detallepelicula.component';
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    NavbarComponent,
    ListapeliComponent,
    PostpeliculaComponent,
    SearchboxComponent,
    ListadepeliculasComponent,
    DetallepeliculaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
