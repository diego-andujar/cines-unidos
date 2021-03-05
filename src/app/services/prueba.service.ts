import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Prueba } from '../models/prueba';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  algoUrl:string= '';
  algoLimit = '?_limit=5'
  constructor(private http:HttpClient) {
    getPruebas():Observable<Prueba[]> {
      return this.http.get<Prueba[]>(`${this.algoUrl}${this.algoLimit}`);
    }
   }
}
