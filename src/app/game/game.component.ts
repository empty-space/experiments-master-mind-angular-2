import { Component, OnInit } from '@angular/core';
import { Turn } from '../models/turn.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  turns: Turn[];

  constructor() {
    this.turns = [
      {coloredBalls: ['red', 'blue', 'magenta', 'yellow'], bulls:0, cows:0},
      {coloredBalls: ['red', 'blue', 'magenta', 'yellow'], bulls:1, cows:1},
      {coloredBalls: ['red', 'blue', 'magenta', 'yellow'], bulls:2, cows:1},
      {coloredBalls: ['red', 'blue', 'magenta', 'yellow'], bulls:3, cows:1},
      {coloredBalls: ['red', 'blue', 'magenta', 'yellow'], bulls:4, cows:0},


  ];
  }

  ngOnInit() {
  }

}
