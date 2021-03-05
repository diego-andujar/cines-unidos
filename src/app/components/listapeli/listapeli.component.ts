import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  titulo: string;
  generos: string;
  idioma: string;
  presupuesto: number;
  descripcion: string;
  rating: number;
  productoras: string;
  lanzamiento: string;
  estado: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {titulo:"Veamos si funciona", generos: 'accion', idioma: 'english', presupuesto: 400, descripcion: 'info', 
  rating: 5, productoras:'globovision', lanzamiento:'5/3/2021', estado: 'rumored'},
  {titulo:"Veamos si funciona", generos: 'accion', idioma: 'english', presupuesto: 400, descripcion: 'info', 
  rating: 5, productoras:'globovision', lanzamiento:'5/3/2021', estado: 'rumored'},
  {titulo:"Veamos si funciona", generos: 'accion', idioma: 'english', presupuesto: 400, descripcion: 'info', 
  rating: 5, productoras:'globovision', lanzamiento:'5/3/2021', estado: 'rumored'},
  {titulo:"Veamos si funciona", generos: 'accion', idioma: 'english', presupuesto: 400, descripcion: 'info', 
  rating: 5, productoras:'globovision', lanzamiento:'5/3/2021', estado: 'rumored'},
  {titulo:"Veamos si funciona", generos: 'accion', idioma: 'english', presupuesto: 400, descripcion: 'info', 
  rating: 5, productoras:'globovision', lanzamiento:'5/3/2021', estado: 'rumored'},
  {titulo:"Veamos si funciona", generos: 'accion', idioma: 'english', presupuesto: 400, descripcion: 'info', 
  rating: 5, productoras:'globovision', lanzamiento:'5/3/2021', estado: 'rumored'},
  {titulo:"Veamos si funciona", generos: 'accion', idioma: 'english', presupuesto: 400, descripcion: 'info', 
  rating: 5, productoras:'globovision', lanzamiento:'5/3/2021', estado: 'rumored'},
  {titulo:"Veamos si funciona", generos: 'accion', idioma: 'english', presupuesto: 400, descripcion: 'info', 
  rating: 5, productoras:'globovision', lanzamiento:'5/3/2021', estado: 'rumored'},
  
];
@Component({
  selector: 'app-listapeli',
  templateUrl: './listapeli.component.html',
  styleUrls: ['./listapeli.component.scss']
})

export class ListapeliComponent {
  displayedColumns: string[] = ['titulo', 'generos', 'idioma', 'presupuesto', 'descripcion', 'rating', 'productoras','lanzamiento', 'estado'];
  dataSource = ELEMENT_DATA;
}
// @Component({
//   selector: 'app-listapeli',
//   templateUrl: './listapeli.component.html',
//   styleUrls: ['./listapeli.component.scss']
// })
// export class ListapeliComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
