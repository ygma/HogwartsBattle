import { LocationCard } from '../location-card';

export class LocationStatus {
  private _currentCardIndex = 0;
  private _currentVillainControls = 0;

  constructor(
    readonly locationCards: LocationCard[],
  ) {

  }

  get currentLocationCard(): LocationCard {
    return this.locationCards[this._currentCardIndex];
  }

  get currentCardIndex(): number {
    return this._currentCardIndex;
  }

  get currentVillainControls(): number {
    return this._currentVillainControls;
  }

  addVillainControls(count: number): void {
    this._currentVillainControls = Math.min(
      this._currentVillainControls + count,
      this.currentLocationCard.maxVillainControls,
    );
  }

  removeVillainControls(count: number): void {
    this._currentVillainControls = Math.max(
      0,
      this._currentVillainControls - count,
    );
  }
}
