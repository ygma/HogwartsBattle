import { GameBoxEnum } from '../../game-boxes/game-box-enum';
import { HogwartsCard } from '../../hogwarts-card';
import { HogwartsCardType } from '../hogwarts-card-type';

export class WingardiumLeviosa extends HogwartsCard {
  constructor() {
    super(
      HogwartsCardType.Spell,
      2,
      GameBoxEnum.Game1,
      'Wingardium Leviosa',
    );
  }
}
