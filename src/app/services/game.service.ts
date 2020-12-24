import { Injectable } from '@angular/core';
import { GameBox } from '../classes/game-box';
import { GameBox1 } from '../classes/game-boxes/game-box-1';
import { GamePlay } from '../classes/game-play';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private _gamePlay: GamePlay;
  private readonly gameBoxes: GameBox[];

  constructor() {
    this.gameBoxes = [
      new GameBox1()
    ];
  }

  start(): void {
    this._gamePlay = new GamePlay(this.gameBoxes[0]);
  }

  get gamePlay(): GamePlay {
    return this._gamePlay;
  }
}
