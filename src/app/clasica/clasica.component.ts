import { Component, OnInit } from '@angular/core';
import { Contenido } from '../apocalypse/contenido';
import { Musica } from './musica';

@Component({
  selector: 'app-clasica',
  templateUrl: './clasica.component.html',
  styleUrls: ['./clasica.component.css']
})
export class ClasicaComponent implements OnInit {

  clasica : any = [

    new Musica (1, "5th Symphony", "Beethoven"),
    new Musica (2, "4 Seasons", "Vivaldi"),
    new Musica (3, "Dance of the Sugar Plum Fairy", "Tchaikovsky"),
    new Musica (4, "Fur Elise", "Beethoven"),
    new Musica (5, "An Die Freude", "Friedrich von Schiller")
    


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
