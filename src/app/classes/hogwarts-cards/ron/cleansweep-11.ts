import { GameBoxEnum } from '../../game-boxes/game-box-enum';
import { HogwartsCard } from '../../hogwarts-card';
import { HogwartsCardType } from './../hogwarts-card-type';

export class Cleansweep11 extends HogwartsCard {
  constructor() {
    super(
      HogwartsCardType.Item,
      0,
      GameBoxEnum.Game1,
      'Cleansweep 11',
    );
  }
}
