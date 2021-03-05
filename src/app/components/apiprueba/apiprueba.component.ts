import { Prueba } from './../../models/prueba';
import { PruebaService } from './../../services/prueba.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apiprueba',
  templateUrl: './apiprueba.component.html',
  styleUrls: ['./apiprueba.component.scss']
})
export class ApipruebaComponent implements OnInit {
  pruebas:Prueba[]
  constructor(private pruebaService:PruebaService) { }

  ngOnInit() {
    this.pruebaService.getPruebas().subscribe(pruebas => {
      this.pruebas = pruebas;
  }

}
