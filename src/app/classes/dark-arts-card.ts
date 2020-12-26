import * as _ from 'lodash';
import { Ability } from './ability';
import { ActionResult } from './action-result';
import { BaseCard } from './base-card';
import { GameBoxEnum } from './game-boxes/game-box-enum';
import { GamePlay } from './game-play';

export class DarkArtsCard extends BaseCard {
  constructor(
    gameBoxEnum: GameBoxEnum,
    name: string,
    readonly abilities: Ability[] = [],
  ) {
    super(name, gameBoxEnum);
  }

  get descriptions(): string[] {
    return _.map(this.abilities, ability => ability.description);
  }
}
