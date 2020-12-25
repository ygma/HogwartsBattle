import * as _ from 'lodash';
import { Ability } from '../ability';
import { ActionResult } from '../action-result';
import { ActiveHero } from '../actions/active-hero';
import { MinusHealth } from '../actions/minus-health';
import { GamePlay } from '../game-play';

export class ActiveHeroLoseHeart implements Ability{
  private activeHero = new ActiveHero();
  private minusHealth: MinusHealth;

  constructor(
    private num: number,
  ) {
    this.minusHealth = new MinusHealth(num);
  }

  do(gamePlay: GamePlay): ActionResult<void> {
    const result1 = this.activeHero.do(gamePlay);
    const result2 = this.minusHealth.do(result1.obj);

    return result2;
  }

  get description(): string {
    return _.join([this.activeHero.description, this.minusHealth.description], ' ');
  }
}
