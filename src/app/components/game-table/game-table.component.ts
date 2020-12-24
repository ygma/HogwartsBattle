import { Component, Input, OnInit } from '@angular/core';
import { GamePlay } from 'src/app/classes/game-play';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.scss']
})
export class GameTableComponent implements OnInit {
  gamePlay: GamePlay;

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
  }

  onStart(): void {
    this.gamePlay = this.gameService.gamePlay;
  }

}
