import { Ability } from '../ability';
import { ActionResult } from '../action-result';
import { faSkull } from '../fa-util';
import { GamePlay } from '../game-play';

export class AddVillainControl extends Ability {
  get description(): string {
    return `Add ${this.num} ${faSkull} to the Location.`;
  }

  constructor(
    private num: number,
  ) {
    super();
  }

  do(gamePlay: GamePlay): ActionResult<void> {
    return gamePlay.locationStatus.addVillainControls(this.num);
  }
}
