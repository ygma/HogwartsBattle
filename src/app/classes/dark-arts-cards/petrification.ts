import { DarkArtsCard } from '../dark-arts-card';
import { GameBoxEnum } from '../game-boxes/game-box-enum';

export class Petrification extends DarkArtsCard {
  constructor() {
    super(
      GameBoxEnum.Game1,
      'Petrification',
    )
  }
}
