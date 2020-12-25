import { Ability } from './ability';
import { BaseCard } from './base-card';
import { GameBoxEnum } from './game-boxes/game-box-enum';
import { HogwartsCard } from './hogwarts-card';

export class HeroCard extends BaseCard {
  constructor(
    gameBoxEnum: GameBoxEnum,
    name: string,
    readonly initHogwartsCards: HogwartsCard[],
    readonly abilities: Ability[] = [],
  ) {
    super(name, gameBoxEnum);
  }
}
