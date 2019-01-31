import { ColorBall } from './color-ball.model';

export class Turn {
    coloredBalls: ColorBall[];   
    
    constructor() {
    }

    static createWithEmptyBalls():Turn{
        var t = new Turn();
        t.coloredBalls = Array(4).fill(null).map(c => new ColorBall());        
        return t;
    }

    
    isFilled():boolean{
        return this.coloredBalls.length == 4
                && this.coloredBalls.every(c => c.color != undefined );
    }
}
