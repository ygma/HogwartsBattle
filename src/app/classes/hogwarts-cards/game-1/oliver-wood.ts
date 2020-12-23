import { GameBoxEnum } from '../../game-boxes/game-box-enum';
import { HogwartsCard } from '../../hogwarts-card';
import { HogwartsCardType } from '../hogwarts-card-type';

export class OliverWood extends HogwartsCard {
  constructor() {
    super(
      HogwartsCardType.Ally,
      3,
      GameBoxEnum.Game1,
      'Oliver Wood',
    );
  }
}
