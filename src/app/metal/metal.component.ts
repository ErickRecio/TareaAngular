import { Component, OnInit } from '@angular/core';
import { Band } from './band';

@Component({
  selector: 'app-metal',
  templateUrl: './metal.component.html',
  styleUrls: ['./metal.component.css']
})
export class MetalComponent implements OnInit {


  metal :any = [

    new Band(1, "Nightwish"),
    new Band(2, "Metallica"),
    new Band(3, "Amaranthe"),
    new Band(4, "Black Sabbath"),
    new Band(5, "Iron Maiden"),
    new Band(6, "Disturbed"),
    new Band(7, "Drowning Pool"),
    new Band(8, "Judas Priest"),
    new Band(9, "System of a Down"),
    new Band(10, "Tool")


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
