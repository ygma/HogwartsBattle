import { GameBoxEnum } from '../../game-boxes/game-box-enum';
import { HogwartsCard } from '../../hogwarts-card';
import { HogwartsCardType } from '../hogwarts-card-type';

export class Descendo extends HogwartsCard {
  constructor() {
    super(
      HogwartsCardType.Spell,
      5,
      GameBoxEnum.Game1,
      'Descendo',
    );
  }
}
