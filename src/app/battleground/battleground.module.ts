import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { StoreModule } from '@ngrx/store';
import { actorReducer } from './actor/actor.reducer';

import { ActorComponent } from './actor/actor.component';
import { EnemyComponent } from './enemy/enemy.component';


@NgModule({
  declarations: [ActorComponent, EnemyComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    StoreModule.forFeature('actor', actorReducer)
  ],
  exports: [ActorComponent]
})
export class BattlegroundModule { }
