import * as _ from 'lodash';
import { HeroCard } from '../hero-card';
import { HogwartsCard } from '../hogwarts-card';

export class HeroStatus {
  private _currentHealth = 10;
  private _currentAttackCount = 0;
  private _currentInfluenceCount = 0;
  private _drawDeck: HogwartsCard[] = [];
  private _discardPile: HogwartsCard[] = [];
  private _cardsInHand: HogwartsCard[] = [];

  constructor(
    readonly heroCard: HeroCard,
  ) {
    this._drawDeck = _.shuffle(this.heroCard.initHogwartsCards);
    _.times(5, () => this.draw());
  }

  draw(): void {
    if (this._drawDeck.length === 0) {
      this._drawDeck = [...this._discardPile];
      this._drawDeck = _.shuffle(this._drawDeck);
      this._discardPile = [];
    }
    this._cardsInHand = [...this._cardsInHand, this._drawDeck.shift()];
  }

  get currentHealth(): number {
    return this._currentHealth;
  }

  get currentAttackCount(): number {
    return this._currentAttackCount;
  }

  get currentInfluenceCount(): number {
    return this._currentInfluenceCount;
  }

  get cardsInHand(): HogwartsCard[] {
    return this._cardsInHand;
  }

  get drawDeckCount(): number {
    return this._drawDeck.length;
  }

  get discardPile(): HogwartsCard[] {
    return this._discardPile;
  }
}
