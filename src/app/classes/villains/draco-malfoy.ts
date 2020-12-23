import { GameBoxEnum } from '../game-boxes/game-box-enum';
import { VillainCard } from '../villain-card';

export class DracoMalfoy extends VillainCard {
  constructor() {
    super(
      GameBoxEnum.Game1,
      'Draco Malfoy',
      6,
    )
  }
}
