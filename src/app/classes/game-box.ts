import { DarkArtsCard } from './dark-arts-card';
import { HeroCard } from './hero-card';
import { HogwartsCard } from './hogwarts-card';
import { LocationCard } from './location-card';
import { VillainCard } from './villain-card';

export interface GameBox {
    readonly locationCards: LocationCard[];
    readonly darkArtsCards: DarkArtsCard[];
    readonly villainCards: VillainCard[];
    readonly hogwartsCards: HogwartsCard[];
    readonly heroCards: HeroCard[];
    readonly activeVillainCount: number;
}
