import { Component, Input, OnInit } from '@angular/core';
import { GamePlay } from 'src/app/classes/game-play';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  @Input() gamePlay: GamePlay;

  constructor() { }

  ngOnInit(): void {
  }

}
