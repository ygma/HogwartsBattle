import { Component, Input, OnInit } from '@angular/core';
import { GamePlay } from 'src/app/classes/game-play';

@Component({
  selector: 'app-output-area',
  templateUrl: './output-area.component.html',
  styleUrls: ['./output-area.component.scss']
})
export class OutputAreaComponent implements OnInit {
  @Input() gamePlay: GamePlay;

  constructor() { }

  ngOnInit(): void {
  }

}
