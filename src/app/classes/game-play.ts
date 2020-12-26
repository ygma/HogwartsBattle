import { DarkArtsCard } from './dark-arts-card';
import { GameBox } from './game-box';
import { HogwartsCard } from './hogwarts-card';
import { VillainCard } from './villain-card';
import * as _ from 'lodash';
import { LocationStatus } from './game-play/location-status';
import { VillainStatus } from './game-play/villain-status';
import { HeroStatus } from './game-play/hero-status';
import { Effect } from './effect';
import { Ability } from './ability';
import { ActionResult } from './action-result';

export class GamePlay {
  private _locationStatus: LocationStatus;
  private _villainStatuses: VillainStatus[] = [];
  private _villainDeck: VillainCard[];
  private _heroStatuses: HeroStatus[];
  private _darkArtsDeck: DarkArtsCard[];
  private _revealedDarkArtsCards: DarkArtsCard[] = [];
  private _hogwartsCardDeck: HogwartsCard[];
  private _revealedHogwartsCards: HogwartsCard[] = [];
  private _activeHeroIndex = -1;
  private _logs: string[] = [];

  constructor(private readonly _gameBox: GameBox) {
    this._locationStatus = new LocationStatus(_gameBox.locationCards);
    this._villainDeck = _.shuffle(_gameBox.villainCards);
    this._hogwartsCardDeck = _.shuffle(_gameBox.hogwartsCards);
    this._darkArtsDeck = _.shuffle(_gameBox.darkArtsCards);

    _.times(_gameBox.activeVillainCount, () => {
      this._villainStatuses = [...this._villainStatuses, new VillainStatus(this._villainDeck.shift())];
    });

    this._heroStatuses = _(_gameBox.heroCards)
      .shuffle()
      .map(card => new HeroStatus(card))
      .value();

    this.fillRevealedHogwartsCards();

    this._activeHeroIndex = 0;
    this.activeHero.isActive = true;
  }

  next(): void {
    const revealedDarkArtsCard = this.revealDarkArtsCard();
    revealedDarkArtsCard.abilities.forEach(ability => {
      this._doEffect(this._getPreEffect(this._globalEffects), effect => effect.actionsAfterMe, ability);
      const result = this._doWithLog(ability);
      if (!result.isSuccess) {
        return;
      }
      this._doEffect(this._getPostEffects(this._globalEffects), effect => effect.actionsBeforeMe, ability);
    });
  }

  revealDarkArtsCard(): DarkArtsCard {
    if (_.isEmpty(this._darkArtsDeck)) {
      this._darkArtsDeck = _.shuffle(this._gameBox.darkArtsCards);
    }
    const revealedDarkArtsCard = this._darkArtsDeck.shift();
    this._revealedDarkArtsCards = [...this._revealedDarkArtsCards, revealedDarkArtsCard];
    return revealedDarkArtsCard;
  }

  fillRevealedHogwartsCards(): void {
    _.times(6 - this._revealedHogwartsCards.length, () => {
      if (this._hogwartsCardDeck.length === 0) {
        return;
      }
      this._revealedHogwartsCards = [...this._revealedHogwartsCards, this._hogwartsCardDeck.shift()];
    });
  }

  nextHero(): void {
    this.activeHero.isActive = false;
    this._activeHeroIndex = (this._activeHeroIndex + 1) % this._heroStatuses.length;
    this.activeHero.isActive = true;
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

  get activeHero(): HeroStatus {
    return this._heroStatuses[this._activeHeroIndex];
  }

  get logs(): string[] {
    return this._logs;
  }

  private get _globalEffects(): Effect[] {
    const cards = [
      ...this._revealedDarkArtsCards,
      ...this._villainStatuses.map(status => status.villainCard),
      ...this._heroStatuses.map(status => status.heroCard)
    ];
    return _(cards)
      .flatMap(card => card.abilities)
      .filter(ability => ability instanceof Effect)
      .map(ability => ability as Effect)
      .value();
  }

  private _getPreEffect(effects: Effect[]): Effect[] {
    return _.filter(effects, effect => !_.isEmpty(effect.actionsAfterMe));
  }

  private _getPostEffects(effects: Effect[]): Effect[] {
    return _.filter(effects, effect => !_.isEmpty(effect.actionsBeforeMe));
  }

  private _doEffect(
    effects: Effect[],
    getWatchedActions: ((effect: Effect) => any[]),
    ability: Ability
  ): void {
    const applicablePreEffects = _.filter(effects, effect => {
      const newLocal = getWatchedActions(effect);
      return _.some(newLocal, clazz => ability instanceof clazz);
    });
    applicablePreEffects.forEach(effect => this._doWithLog(effect));
  }

  private _doWithLog(doable: {do: ((gamePlay: GamePlay) => ActionResult<void>)}): ActionResult<void> {
    const result = doable.do.apply(doable, [this]);
    this._logs = [...this.logs, result.log];
    return result;
  }
}
