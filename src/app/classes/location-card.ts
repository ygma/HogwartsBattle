import { BaseCard } from './base-card';
import { GameBoxEnum } from './game-boxes/game-box-enum';

export class LocationCard extends BaseCard {
  constructor(
    gameBoxEnum: GameBoxEnum,
    readonly countOfDarkArtsEventRevealedEachTurn: number,
    readonly maxVillainControls: number
  ) {
    super('', gameBoxEnum);
  }
}
