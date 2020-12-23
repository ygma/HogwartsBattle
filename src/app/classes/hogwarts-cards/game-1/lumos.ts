import { GameBoxEnum } from '../../game-boxes/game-box-enum';
import { HogwartsCard } from '../../hogwarts-card';
import { HogwartsCardType } from '../hogwarts-card-type';

export class Lumos extends HogwartsCard {
  constructor() {
    super(
      HogwartsCardType.Spell,
      4,
      GameBoxEnum.Game1,
      'Lumos',
    );
  }
}
