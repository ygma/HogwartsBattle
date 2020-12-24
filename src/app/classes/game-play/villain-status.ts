import { VillainCard } from '../villain-card';

export class VillainStatus {
  private _currentHealth: number;

  constructor(
    private _villainCard: VillainCard,
  ) {
    this._currentHealth = _villainCard.maxHealths;
  }

  get currentHealth(): number {
    return this._currentHealth;
  }

  get villainCard(): VillainCard {
    return this._villainCard;
  }
}
