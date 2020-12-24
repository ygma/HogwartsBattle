import { Component, Input, OnInit } from '@angular/core';
import { DarkArtsCard } from 'src/app/classes/dark-arts-card';
import { GameBoxEnum } from 'src/app/classes/game-boxes/game-box-enum';

@Component({
  selector: 'app-dark-arts-card',
  templateUrl: './dark-arts-card.component.html',
  styleUrls: ['./dark-arts-card.component.scss']
})
export class DarkArtsCardComponent implements OnInit {
  @Input() card: DarkArtsCard;

  constructor() { }

  ngOnInit(): void {
  }

}
