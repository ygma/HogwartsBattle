import { GameBoxEnum } from './game-boxes/game-box-enum';
import { HogwartsCardType } from './hogwarts-cards/hogwarts-card-type';

export class HogwartsCard {
  constructor(
    readonly type: HogwartsCardType,
    readonly influenceValue: number,
    readonly gameBoxEnum: GameBoxEnum,
    readonly name: string,
  ) {

  }
}
