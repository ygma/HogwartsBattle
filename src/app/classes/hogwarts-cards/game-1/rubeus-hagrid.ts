import { GameBoxEnum } from '../../game-boxes/game-box-enum';
import { HogwartsCard } from '../../hogwarts-card';
import { HogwartsCardType } from '../hogwarts-card-type';

export class RubeusHagrid extends HogwartsCard {
  constructor() {
    super(
      HogwartsCardType.Ally,
      4,
      GameBoxEnum.Game1,
      'Rubeus Hagrid',
    );
  }
}
