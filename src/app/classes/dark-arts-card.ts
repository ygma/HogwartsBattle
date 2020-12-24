import { BaseCard } from './base-card';
import { GameBoxEnum } from './game-boxes/game-box-enum';

export class DarkArtsCard extends BaseCard {
  constructor(
    gameBoxEnum: GameBoxEnum,
    name: string,
  ) {
    super(name, gameBoxEnum);
  }
}
