import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';

@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.css']
})
export class HorrorComponent implements OnInit {


  horror : any =[

    new Movie(1, "El Resplandor", "2:30"),
    new Movie(2, "Los Otros", "2:00"),
    new Movie(3, "Viernes 13", "2:00"),
    new Movie(4, "Pesadilla en la calle del infierno", "2:30"),
    new Movie(5, "El Aro", "2:00"),
    new Movie(6, "La Maldicion", "2:00"),
    new Movie(7, "Extra;as apariciones", "2:30"),
    new Movie(8, "EL Babadook", "2:00"),
    new Movie(9, "Cementerio de Mascotas", "2:00"),
    new Movie(10, "Eso", "2:00"),


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
