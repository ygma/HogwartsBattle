import { GameBoxEnum } from '../game-boxes/game-box-enum';
import { HeroCard } from '../hero-card';
import { Alohomora } from '../hogwarts-cards/alohomora';
import { Mandrake } from '../hogwarts-cards/neville/mandrake';
import { Rememberall } from '../hogwarts-cards/neville/rememberall';
import { Trevor } from '../hogwarts-cards/neville/trevor';

export class NevilleLongbottom1 extends HeroCard {
  constructor() {
    super(
      GameBoxEnum.Game1,
      'Neville Longbottom',
      [
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Mandrake(),
        new Trevor(),
        new Rememberall(),
      ]
    );
  }
}
