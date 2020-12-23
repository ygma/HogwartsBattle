import { GameBoxEnum } from '../game-boxes/game-box-enum';
import { HeroCard } from '../hero-card';
import { Alohomora } from '../hogwarts-cards/alohomora';
import { Firebolt } from '../hogwarts-cards/harry/firebolt';
import { Hedwig } from '../hogwarts-cards/harry/hedwig';
import { InvisibilityCloak } from '../hogwarts-cards/harry/invisibility-cloak';

export class HarryPotter1 extends HeroCard {
  constructor() {
    super(
      GameBoxEnum.Game1,
      'Harry Potter',
      [
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new Alohomora(),
        new InvisibilityCloak(),
        new Hedwig(),
        new Firebolt(),
      ]
    );
  }
}
