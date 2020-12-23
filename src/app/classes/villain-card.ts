import { GameBoxEnum } from './game-boxes/game-box-enum';

export class VillainCard {
  constructor(
    readonly gameBoxEnum: GameBoxEnum,
    readonly name: string,
    readonly maxHealths: number
  ) {

  }
}
