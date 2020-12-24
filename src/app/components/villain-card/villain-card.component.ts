import { Component, Input, OnInit } from '@angular/core';
import { GameBoxEnum } from 'src/app/classes/game-boxes/game-box-enum';
import { VillainStatus } from 'src/app/classes/game-play/villain-status';

@Component({
  selector: 'app-villain-card',
  templateUrl: './villain-card.component.html',
  styleUrls: ['./villain-card.component.scss']
})
export class VillainCardComponent implements OnInit {
  @Input() villainStatus: VillainStatus;

  constructor() { }

  ngOnInit(): void {
  }
}
