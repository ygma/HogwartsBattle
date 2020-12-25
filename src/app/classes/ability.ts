import { ActionResult } from './action-result';
import { GamePlay } from './game-play';

export interface Ability {
  readonly description: string;
  do(gamePlay: GamePlay): ActionResult<void>;
}
