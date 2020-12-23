import { GameBoxEnum } from '../game-boxes/game-box-enum';
import { HeroCard } from '../hero-card';
import { Alohomora } from '../hogwarts-cards/alohomora';
import { BeedleTheBard } from '../hogwarts-cards/hermione/beedle-the-bard';
import { Crookshanks } from '../hogwarts-cards/hermione/crookshanks';
import { TimeTurner } from '../hogwarts-cards/hermione/time-turner';

export class HermioneGranger1 extends HeroCard {
  constructor() {
    super(
      GameBoxEnum.Game1,
      'Hermione Granger',
      [
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Crookshanks(),
        new TimeTurner(),
        new BeedleTheBard(),
      ]
    );
  }
}
