import { Component, OnInit } from '@angular/core';
import { Contenido } from './contenido';

@Component({
  selector: 'app-apocalypse',
  templateUrl: './apocalypse.component.html',
  styleUrls: ['./apocalypse.component.css']
})
export class ApocalypseComponent implements OnInit {


  apocalypse : any =[

    new Contenido (1, "Juegos del Hambre", 12),
    new Contenido (2, "Divergente", 3),
    new Contenido (3, "Maze Runner", 8),
    new Contenido (4, "Zombie Land: Tiro de Gracia", 9),
    new Contenido (5, "Juegos del Hambre: En Llamas", 13),
    new Contenido (6, "Day Break", 2),
    new Contenido (7, "Juegos del Hambre: Sinsajo", 14)


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
