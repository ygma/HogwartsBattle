import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameTableComponent } from './game-table/game-table.component';
import { OutputAreaComponent } from './output-area/output-area.component';
import { MenuComponent } from './menu/menu.component';
import { PlayerBoardComponent } from './player-board/player-board.component';
import { LocationCardComponent } from './location-card/location-card.component';
import { DarkArtsCardComponent } from './dark-arts-card/dark-arts-card.component';
import { VillainCardComponent } from './villain-card/villain-card.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { HogwartsCardComponent } from './hogwarts-card/hogwarts-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameTableComponent,
    OutputAreaComponent,
    MenuComponent,
    PlayerBoardComponent,
    LocationCardComponent,
    DarkArtsCardComponent,
    VillainCardComponent,
    HeroCardComponent,
    HogwartsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
