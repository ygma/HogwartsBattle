import { GameBoxEnum } from '../../game-boxes/game-box-enum';
import { HogwartsCard } from '../../hogwarts-card';
import { HogwartsCardType } from '../hogwarts-card-type';

export class QuidditchGear extends HogwartsCard {
  constructor() {
    super(
      HogwartsCardType.Item,
      3,
      GameBoxEnum.Game1,
      'Quidditch Gear',
    );
  }
}
