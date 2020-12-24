import { Component, Input, OnInit } from '@angular/core';
import { HeroStatus } from 'src/app/classes/game-play/hero-status';

@Component({
  selector: 'app-player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.scss']
})
export class PlayerBoardComponent implements OnInit {
  @Input() heroStatus: HeroStatus;

  constructor() { }

  ngOnInit(): void {
  }

}
