import { ActionResult } from './action-result';
import { GamePlay } from './game-play';

export interface Ability {
  do(gamePlay: GamePlay): ActionResult<void>
  readonly description: string;
}
