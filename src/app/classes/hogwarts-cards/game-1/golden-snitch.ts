import { GameBoxEnum } from '../../game-boxes/game-box-enum';
import { HogwartsCard } from '../../hogwarts-card';
import { HogwartsCardType } from '../hogwarts-card-type';

export class GoldenSnitch extends HogwartsCard {
  constructor() {
    super(
      HogwartsCardType.Item,
      5,
      GameBoxEnum.Game1,
      'Golden Snitch',
    );
  }
}
