import { GameBoxEnum } from './game-boxes/game-box-enum';
import { HogwartsCard } from './hogwarts-card';

export class HeroCard {
  constructor(
    readonly gameBoxEnum: GameBoxEnum,
    readonly name: string,
    readonly initHogwartsCards: HogwartsCard[]
  ) {

  }
}
