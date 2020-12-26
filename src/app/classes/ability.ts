import { ActionResult } from './action-result';
import { GamePlay } from './game-play';

export class Ability {
  get description(): string {
    return null;
  }

  do(gamePlay: GamePlay): ActionResult<void> {
    throw new Error('please implement');
  }
}
