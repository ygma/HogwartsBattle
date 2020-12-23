import { GameBoxEnum } from '../../game-boxes/game-box-enum';
import { HogwartsCard } from '../../hogwarts-card';
import { HogwartsCardType } from '../hogwarts-card-type';

export class Reparo extends HogwartsCard {
  constructor() {
    super(
      HogwartsCardType.Spell,
      3,
      GameBoxEnum.Game1,
      'Reparo',
    );
  }
}
