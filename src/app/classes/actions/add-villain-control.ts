import { Ability } from '../ability';
import { ActionInterface } from '../action';
import { ActionResult } from '../action-result';
import { faSkull } from '../fa-util';
import { GamePlay } from '../game-play';

export class AddVillainControl implements ActionInterface, Ability {
  description = `Add ${this.num} ${faSkull} to the Location.`;

  constructor(
    private num: number,
  ) {

  }

  do(gamePlay: GamePlay): ActionResult<void> {
    return gamePlay.locationStatus.addVillainControls(this.num);
  }
}
