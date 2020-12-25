import { RoleStatus } from '../role-status';
import { VillainCard } from '../villain-card';

export class VillainStatus extends RoleStatus {

  constructor(
    private _villainCard: VillainCard,
  ) {
    super(_villainCard.maxHealths, _villainCard);
  }

  get villainCard(): VillainCard {
    return this._villainCard;
  }
}
