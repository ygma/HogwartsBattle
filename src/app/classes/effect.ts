import { Ability } from './ability';
import { ActionResult } from './action-result';
import { GamePlay } from './game-play';

export abstract class Effect extends Ability {
  get actionsAfterMe(): any[] {
    return [];
  }

  get actionsBeforeMe(): any[] {
    return [];
  }
}


