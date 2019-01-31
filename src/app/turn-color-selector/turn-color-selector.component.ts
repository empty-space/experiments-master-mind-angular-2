import { Component, OnInit,  EventEmitter, Input, Output } from '@angular/core';
import { BallColorsService } from '../services/ball-colors.service';
import { ColorBall } from '../models/color-ball.model';


@Component({
  selector: 'app-turn-color-selector',
  templateUrl: './turn-color-selector.component.html',
  styleUrls: ['./turn-color-selector.component.css']
})
export class TurnColorSelectorComponent implements OnInit {
  colors:string[];  
  @Output() chooselColor = new EventEmitter<string>();

  constructor(private colorsService:BallColorsService) { }

  ngOnInit() {
    this.colors = this.colorsService.getAllColors()
  }

  choose(color:string):void{
    this.chooselColor.emit(color);
  }

}
