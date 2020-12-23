import { GameBoxEnum } from './game-boxes/game-box-enum';

export class DarkArtsCard {
  constructor(
    readonly gameBoxEnum: GameBoxEnum,
    readonly name: string,
  ) {

  }
}
