import { GameBoxEnum } from '../game-boxes/game-box-enum';
import { HeroCard } from '../hero-card';
import { Alohomora } from '../hogwarts-cards/alohomora';
import { Cleansweep11 } from '../hogwarts-cards/ron/cleansweep-11';
import { EveryFlavourBeans } from '../hogwarts-cards/ron/every-flavour-beans';
import { Pigwidgeon } from '../hogwarts-cards/ron/pigwidgeon';

export class RonWeasley1 extends HeroCard {
  constructor() {
    super(
      GameBoxEnum.Game1,
      'Ron Weasley',
      [
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new EveryFlavourBeans(),
        new Pigwidgeon(),
        new Cleansweep11(),
      ]
    );
  }
}
