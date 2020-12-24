import { GameBoxEnum } from '../game-boxes/game-box-enum';
import { VillainCard } from '../villain-card';

export class CrabbeGoyle extends VillainCard {
  constructor() {
    super(
      GameBoxEnum.Game1,
      'Crabbe & Goyle',
      5,
    );
  }
}
