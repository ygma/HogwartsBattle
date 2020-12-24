import { GameBoxEnum } from './game-boxes/game-box-enum';

export class BaseCard {
  constructor(
    readonly name: string,
    readonly gameBoxEnum: GameBoxEnum,
  ) {

  }

  get gameBoxName(): string {
    return GameBoxEnum[this.gameBoxEnum];
  }
}
