import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  titulo: string;
  boletos: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {titulo:"Veamos si funciona", boletos:3},
  {titulo:"Veamos si funciona", boletos:3},
  {titulo:"Veamos si funciona", boletos:3},
  
  
];

@Component({
  selector: 'app-tablareservas',
  templateUrl: './tablareservas.component.html',
  styleUrls: ['./tablareservas.component.scss']
})

export class TablareservasComponent {
  displayedColumns: string[] = ['titulo', 'boletos'];
  dataSource = ELEMENT_DATA;
}


