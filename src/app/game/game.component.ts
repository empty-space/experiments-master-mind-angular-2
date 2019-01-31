import { Component, OnInit } from '@angular/core';
import { Turn } from '../models/turn.model';
import { BallColorsService } from '../services/ball-colors.service';
import {ViewChild, ElementRef} from '@angular/core';
import { ColorBall } from '../models/color-ball.model';
import { GuessService } from '../services/guess.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  turns: Turn[];
  currentTurn: Turn;  
  activeBallPlace: ColorBall;

  constructor(private colorsService:BallColorsService, private guessService:GuessService) {
    this.turns = [
      this.guessService.generateRandomTurn(),
      this.guessService.generateRandomTurn(),
      this.guessService.generateRandomTurn(),
      this.guessService.generateRandomTurn()];
    this.currentTurn = Turn.createWithEmptyBalls();    
    console.log(this.currentTurn)
  }

  // generateRandomTurn():Turn{
  //   var t = new Turn();
  //   t.coloredBalls = [this.colorsService.getRandomColor(),this.colorsService.getRandomColor(),this.colorsService.getRandomColor(),this.colorsService.getRandomColor()]
  //   t.bulls = Math.floor(Math.random()*4)
  //   t.cows = Math.floor(Math.random()*3+2) - t.bulls;
  //   t.cows = t.cows >=0 ? t.cows : 0;
  //   return t;
  // }

  ngOnInit() {
  }

  toggleColorPanel(ballPlace:ColorBall):void {
    this.log(ballPlace);
    this.activeBallPlace = ballPlace;    
    //this.currentBallPlace = ballPlace;
  }

  colorWasChoosed(color:string){
    this.log(color);
    this.activeBallPlace.color = color;
    //this.currentBallPlace.style.backgroundColor = color;
  }

  log(message){
    console.log(message)
  }
}
