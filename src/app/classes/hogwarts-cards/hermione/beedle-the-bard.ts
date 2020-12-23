import { GameBoxEnum } from '../../game-boxes/game-box-enum';
import { HogwartsCard } from '../../hogwarts-card';
import { HogwartsCardType } from './../hogwarts-card-type';

export class BeedleTheBard extends HogwartsCard {
  constructor() {
    super(
      HogwartsCardType.Item,
      0,
      GameBoxEnum.Game1,
      'Beedle The Bard',
    );
  }
}
