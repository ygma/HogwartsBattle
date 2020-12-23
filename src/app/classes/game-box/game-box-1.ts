import { DarkArtsCard } from '../dark-arts-card';
import { GameBox } from '../game-box';
import { HeroCard } from '../hero-card';
import { HogwartsCard } from '../hogwarts-card';
import { LocationCard } from '../location-card';
import { VillainCard } from '../villain-card';

export class GameBox1 implements GameBox {
  locationCards: LocationCard[];
  darkArtsCards: DarkArtsCard[];
  villainCards: VillainCard[];
  hogwartsCards: HogwartsCard[];
  heroCards: HeroCard[];

  constructor() {
    this.locationCards = [];
    this.darkArtsCards = [];
    this.villainCards = [];
    this.hogwartsCards = [];
    this.heroCards = [];
  }
}
