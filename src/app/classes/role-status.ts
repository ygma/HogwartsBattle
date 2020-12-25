import { ActionResult } from './action-result';
import { BaseCard } from './base-card';
import { faHeart } from './fa-util';

export class RoleStatus {

  constructor(
    private _currentHealth: number,
    private card: BaseCard) {

  }

  minusHealth(num: number): ActionResult<void> {
    if (this._currentHealth === 0) {
      return new ActionResult(false, `${this.card.name} has been stunned.`);
    }

    const oldHealth = this._currentHealth;
    this._currentHealth = Math.max(0, this._currentHealth - num);
    return new ActionResult(true, `${this.card.name} lost ${oldHealth - this._currentHealth} ${faHeart}.`);
  }

  get currentHealth(): number {
    return this._currentHealth;
  }
}
