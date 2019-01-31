import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ColorBall } from '../models/color-ball.model';

@Injectable({
  providedIn: 'root'
})
export class BallColorsService {

  private colors:ColorBall[];
  constructor() {
    this.colors = [
      new ColorBall("red"), 
      new ColorBall("magenta"),
      new ColorBall("blue"),
      new ColorBall("green"),
      new ColorBall("yellow"),
      new ColorBall("#FFF"),
      new ColorBall("#49B")]
   }

   getAllColors():string[]{
    return this.colors.map(cb => cb.color);
   }
   
   getAllColorBalls():ColorBall[]{
    return this.colors.slice(0);
   }

  getRandomColor(){
    return this.colors[Math.floor(Math.random()*this.colors.length)];
  }
}
