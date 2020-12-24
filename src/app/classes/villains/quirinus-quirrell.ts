import { GameBoxEnum } from '../game-boxes/game-box-enum';
import { VillainCard } from '../villain-card';

export class QuirinusQuirrell extends VillainCard {
  constructor() {
    super(
      GameBoxEnum.Game1,
      'Quirinus Quirrell',
      6,
    );
  }
}
