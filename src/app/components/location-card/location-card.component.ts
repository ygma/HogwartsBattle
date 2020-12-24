import { Component, Input, OnInit } from '@angular/core';
import { GameBoxEnum } from 'src/app/classes/game-boxes/game-box-enum';
import { LocationStatus } from 'src/app/classes/game-play/location-status';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {
  @Input() locationStatus: LocationStatus;

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
  }

}
