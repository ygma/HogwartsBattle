import { ActiveHeroLoseHeart } from '../abilities/active-hero-lose-heart';
import { DarkArtsCard } from '../dark-arts-card';
import { GameBoxEnum } from '../game-boxes/game-box-enum';

export class Expulso extends DarkArtsCard {
  constructor() {
    super(
      GameBoxEnum.Game1,
      'Expulso',
      [new ActiveHeroLoseHeart(2)],
    );
  }
}
