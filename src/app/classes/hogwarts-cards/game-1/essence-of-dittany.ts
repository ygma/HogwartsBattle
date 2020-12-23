import { GameBoxEnum } from '../../game-boxes/game-box-enum';
import { HogwartsCard } from '../../hogwarts-card';
import { HogwartsCardType } from '../hogwarts-card-type';

export class EssenceOfDittany extends HogwartsCard {
  constructor() {
    super(
      HogwartsCardType.Item,
      2,
      GameBoxEnum.Game1,
      'Essence Of Dittany',
    );
  }
}
