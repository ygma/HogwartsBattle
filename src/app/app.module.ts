import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameTableComponent } from './components/game-table/game-table.component';
import { OutputAreaComponent } from './components/output-area/output-area.component';
import { MenuComponent } from './components/menu/menu.component';
import { PlayerBoardComponent } from './components/player-board/player-board.component';
import { LocationCardComponent } from './components/location-card/location-card.component';
import { DarkArtsCardComponent } from './components/dark-arts-card/dark-arts-card.component';
import { VillainCardComponent } from './components/villain-card/villain-card.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HogwartsCardComponent } from './components/hogwarts-card/hogwarts-card.component';

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
