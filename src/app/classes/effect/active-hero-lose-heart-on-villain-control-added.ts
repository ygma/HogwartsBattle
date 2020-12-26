import * as _ from 'lodash';
import { ActiveHeroLoseHeart } from '../abilities/active-hero-lose-heart';
import { ActionResult } from '../action-result';
import { AddVillainControl } from '../actions/add-villain-control';
import { Effect } from '../effect';
import { faSkull } from '../fa-util';
import { GamePlay } from '../game-play';

export class ActiveHeroLoseHeartOnVillainControlAdded extends Effect {
  private activeHeroLoseHeart: ActiveHeroLoseHeart = new ActiveHeroLoseHeart(2);

  constructor() {
    super();
  }

  do(gamePlay: GamePlay): ActionResult<void> {
    return this.activeHeroLoseHeart.do(gamePlay);
  }

  get description(): string {
    return `Each time ${faSkull} is added to the Location, ${this.activeHeroLoseHeart.description}`;
  }

  get actionsBeforeMe(): any[] {
    return [AddVillainControl];
  }
}
