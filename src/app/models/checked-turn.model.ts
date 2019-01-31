import { Turn } from './turn.model';
import { ColorBall } from './color-ball.model';


export class CheckedTurn extends Turn{
     
    constructor(turn:Turn, readonly bulls: number = 0, readonly cows: number = 0){
        super();
        this.coloredBalls = turn.coloredBalls.map(cb=>new ColorBall(cb.color));
    }
}