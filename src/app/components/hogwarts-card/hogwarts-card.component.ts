import { Component, Input, OnInit } from '@angular/core';
import { HogwartsCard } from 'src/app/classes/hogwarts-card';

@Component({
  selector: 'app-hogwarts-card',
  templateUrl: './hogwarts-card.component.html',
  styleUrls: ['./hogwarts-card.component.scss']
})
export class HogwartsCardComponent implements OnInit {
  @Input() hogwartsCard: HogwartsCard;

  constructor() { }

  ngOnInit(): void {
  }

}
