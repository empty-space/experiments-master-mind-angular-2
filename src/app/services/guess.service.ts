import { Injectable } from '@angular/core';
import { Turn } from '../models/turn.model';
import { ColorBall } from '../models/color-ball.model';
import { BallColorsService } from './ball-colors.service';
import { CheckedTurn } from '../models/checked-turn.model';

@Injectable({
  providedIn: 'root'
})
export class GuessService {

  private combination: ColorBall[];

  constructor(private colorsService:BallColorsService) { }
  
  generateCombinationForGuessing():void{
    this.combination = this.generateRandomCombination();
    //Array.apply(null, {length: 4}).map(x=>this.colorsService.getRandomColor())
  }
  
  generateRandomCombination():Array<ColorBall>{    
    return Array(4).fill(null).map(x => this.colorsService.getRandomColor())
  }

  generateRandomTurn():CheckedTurn{
    let coloredBalls = [this.colorsService.getRandomColor(),this.colorsService.getRandomColor(),this.colorsService.getRandomColor(),this.colorsService.getRandomColor()]
    let bulls = Math.floor(Math.random()*4)
    let cows = Math.floor(Math.random()*3+2) - t.bulls;
    cows = cows >=0 ? cows : 0;
    return new CheckedTurn();
  }

  checkCombination(turn:Turn):CheckedTurn{
    const bulls = this.checkBulls(turn.coloredBalls);
    const cows = this.checkCows(turn.coloredBalls) - bulls;
    return new CheckedTurn(turn,bulls,cows);
  }

  private checkBulls(testCombination: ColorBall[]):number{
    //bull - correct color on correct place
    let bulls =  this.combination.filter((ball,i) => ball.color == testCombination[i].color);
    return bulls.length;
  }

  private checkCows(testCombination: ColorBall[]):number{
    //cow - correct color on wrong place
    let cows = this.combination
      .filter((ball1) => testCombination.some((ball2) => ball1.color == ball2.color));
    return ;
  }
}
