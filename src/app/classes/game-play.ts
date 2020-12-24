import { DarkArtsCard } from './dark-arts-card';
import { GameBox } from './game-box';
import { HeroCard } from './hero-card';
import { HogwartsCard } from './hogwarts-card';
import { LocationCard } from './location-card';
import { VillainCard } from './villain-card';
import * as _ from 'lodash';
import { LocationStatus } from './game-play/location-status';
import { VillainStatus } from './game-play/villain-status';
import { HeroStatus } from './game-play/hero-status';
import { ThrowStmt } from '@angular/compiler';

export class GamePlay {
  private _locationStatus: LocationStatus;
  private _villainStatuses: VillainStatus[] = [];
  private _villainDeck: VillainCard[];
  private _currentIndexOfVillainDeck = 0;
  private _heroStatuses: HeroStatus[];
  private _darkArtsDeck: DarkArtsCard[];
  private _revealedDarkArtsCards: DarkArtsCard[] =[];
  private _hogwartsCardDeck: HogwartsCard[];
  private _revealedHogwartsCards: HogwartsCard[] =[];

  constructor(private readonly _gameBox: GameBox) {
    this._locationStatus = new LocationStatus(_gameBox.locationCards);
    this._villainDeck = _.shuffle(_gameBox.villainCards);
    this._hogwartsCardDeck = _.shuffle(_gameBox.hogwartsCards);
    this._darkArtsDeck = _.shuffle(_gameBox.darkArtsCards);

    _.times(_gameBox.activeVillainCount, () => {
      this._villainStatuses = [...this._villainStatuses, new VillainStatus(this._villainDeck.shift())]
    });

    this._heroStatuses = _(_gameBox.heroCards)
      .shuffle()
      .map(card => new HeroStatus(card))
      .value();

    this.fillRevealedHogwartsCards();
  }

  fillRevealedHogwartsCards(): void {
    _.times(6 - this._revealedHogwartsCards.length, () => {
      if (this._hogwartsCardDeck.length === 0) {
        return;
      }
      this._revealedHogwartsCards = [...this._revealedHogwartsCards, this._hogwartsCardDeck.shift()];
    })
  }

  get locationStatus(): LocationStatus {
    return this._locationStatus;
  }

  get revealedDarkArtsCards(): DarkArtsCard[] {
    return this._revealedDarkArtsCards;
  }

  get villainStatuses(): VillainStatus[] {
    return this._villainStatuses;
  }

  get heroStatuses(): HeroStatus[] {
    return this._heroStatuses;
  }

  get revealedHogwartsCards(): HogwartsCard[] {
    return this._revealedHogwartsCards;
  }

  get leftDarkArtsDeckCount(): number {
    return this._darkArtsDeck.length;
  }

  get leftVillainsCount(): number {
    return this._villainDeck.length;
  }

  get leftHogwartsCardCount(): number {
    return this._hogwartsCardDeck.length;
  }
}
