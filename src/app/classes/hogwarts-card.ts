import { BaseCard } from './base-card';
import { GameBoxEnum } from './game-boxes/game-box-enum';
import { HogwartsCardType } from './hogwarts-cards/hogwarts-card-type';

export class HogwartsCard extends BaseCard {
  constructor(
    readonly type: HogwartsCardType,
    readonly influenceValue: number,
    gameBoxEnum: GameBoxEnum,
    name: string,
  ) {
    super(name, gameBoxEnum);
  }

  get typeName(): string {
    return HogwartsCardType[this.type];
  }
}
