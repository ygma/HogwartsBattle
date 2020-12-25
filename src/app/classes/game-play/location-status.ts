import { ActionResult } from '../action-result';
import { faSkull } from '../fa-util';
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

  addVillainControls(count: number): ActionResult<void> {
    if (this._currentVillainControls === this.currentLocationCard.maxVillainControls) {
      return new ActionResult(false, 'Villain Controls has been full.');
    }
    const oldCount = this._currentVillainControls;
    this._currentVillainControls = Math.min(
      this._currentVillainControls + count,
      this.currentLocationCard.maxVillainControls,
    );
    return new ActionResult(true, `${this._currentVillainControls - oldCount} ${faSkull} was added.`);
  }

  removeVillainControls(count: number): void {
    this._currentVillainControls = Math.max(
      0,
      this._currentVillainControls - count,
    );
  }
}
