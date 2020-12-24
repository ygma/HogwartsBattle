import { DarkArtsCard } from '../dark-arts-card';
import { Expulso } from '../dark-arts-cards/expulso';
import { Flipendo } from '../dark-arts-cards/flipendo';
import { HeWhoMustNotBeNamed } from '../dark-arts-cards/he-who-must-not-be-named';
import { Petrification } from '../dark-arts-cards/petrification';
import { GameBox } from '../game-box';
import { HeroCard } from '../hero-card';
import { HarryPotter1 } from '../heros/harry-potter-1';
import { HermioneGranger1 } from '../heros/hermione-granger-1';
import { NevilleLongbottom1 } from '../heros/neville-longbottom-1';
import { RonWeasley1 } from '../heros/ron-weasley-1';
import { HogwartsCard } from '../hogwarts-card';
import { AlbusDumbledore } from '../hogwarts-cards/game-1/albus-dumbledore';
import { Descendo } from '../hogwarts-cards/game-1/descendo';
import { EssenceOfDittany } from '../hogwarts-cards/game-1/essence-of-dittany';
import { GoldenSnitch } from '../hogwarts-cards/game-1/golden-snitch';
import { Incendio } from '../hogwarts-cards/game-1/incendio';
import { Lumos } from '../hogwarts-cards/game-1/lumos';
import { OliverWood } from '../hogwarts-cards/game-1/oliver-wood';
import { QuidditchGear } from '../hogwarts-cards/game-1/quidditch-gear';
import { Reparo } from '../hogwarts-cards/game-1/reparo';
import { RubeusHagrid } from '../hogwarts-cards/game-1/rubeus-hagrid';
import { SortingHat } from '../hogwarts-cards/game-1/sorting-hat';
import { WingardiumLeviosa } from '../hogwarts-cards/game-1/wingardium-leviosa';
import { LocationCard } from '../location-card';
import { VillainCard } from '../villain-card';
import { CrabbeGoyle } from '../villains/crabbe-goyle';
import { DracoMalfoy } from '../villains/draco-malfoy';
import { QuirinusQuirrell } from '../villains/quirinus-quirrell';
import { GameBoxEnum } from './game-box-enum';

export class GameBox1 implements GameBox {
  readonly locationCards: LocationCard[];
  readonly darkArtsCards: DarkArtsCard[];
  readonly villainCards: VillainCard[];
  readonly hogwartsCards: HogwartsCard[];
  readonly heroCards: HeroCard[];
  readonly activeVillainCount: number = 1;

  constructor() {
    this.locationCards = [
      new LocationCard(GameBoxEnum.Game1, 1, 4),
      new LocationCard(GameBoxEnum.Game1, 1, 4),
    ];
    this.darkArtsCards = [
      new Flipendo(),
      new Flipendo(),
      new HeWhoMustNotBeNamed(),
      new HeWhoMustNotBeNamed(),
      new HeWhoMustNotBeNamed(),
      new Petrification(),
      new Petrification(),
      new Expulso(),
      new Expulso(),
      new Expulso(),
    ];
    this.villainCards = [
      new CrabbeGoyle(),
      new DracoMalfoy(),
      new QuirinusQuirrell(),
    ];
    this.hogwartsCards = [
      new RubeusHagrid(),
      new EssenceOfDittany(),
      new EssenceOfDittany(),
      new EssenceOfDittany(),
      new EssenceOfDittany(),
      new GoldenSnitch(),
      new AlbusDumbledore(),
      new Incendio(),
      new Incendio(),
      new Incendio(),
      new Incendio(),
      new Reparo(),
      new Reparo(),
      new Reparo(),
      new Reparo(),
      new Reparo(),
      new Reparo(),
      new OliverWood(),
      new QuidditchGear(),
      new QuidditchGear(),
      new QuidditchGear(),
      new QuidditchGear(),
      new SortingHat(),
      new Descendo(),
      new Descendo(),
      new WingardiumLeviosa(),
      new WingardiumLeviosa(),
      new WingardiumLeviosa(),
      new Lumos(),
      new Lumos(),
    ];
    this.heroCards = [
      new HarryPotter1(),
      new HermioneGranger1(),
      new RonWeasley1(),
      new NevilleLongbottom1(),
    ];
  }
}
