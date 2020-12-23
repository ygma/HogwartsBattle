import { GameBoxEnum } from '../../game-boxes/game-box-enum';
import { HogwartsCard } from '../../hogwarts-card';
import { HogwartsCardType } from '../hogwarts-card-type';

export class AlbusDumbledore extends HogwartsCard {
  constructor() {
    super(
      HogwartsCardType.Ally,
      8,
      GameBoxEnum.Game1,
      'Albus Dumbledore',
    );
  }
}
