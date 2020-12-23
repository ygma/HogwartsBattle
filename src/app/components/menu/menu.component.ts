import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
  }

  start(): void {
    this.gameService.start();
  }
}
