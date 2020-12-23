import { GameBoxEnum } from './game-boxes/game-box-enum';

export class LocationCard {
  constructor(
    readonly gameBoxEnum: GameBoxEnum,
    readonly countOfDarkArtsEventRevealedEachTurn: number,
    readonly maxVillainControls: number
  ) {

  }
}
