import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from './actor.actions';
import * as fromActor from './actor.reducer';
import { Actor } from '../../model/actor-model';
import { Stats } from '../../model/stats-model';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

  actors$: Observable<any>;
  nameTemplate = ['Jack', 'Luke', 'Mikaela', 'Samantha'];

  constructor(private store: Store<fromActor.State>) { }

  ngOnInit(): void {
    this.actors$ = this.store.select(fromActor.selectAll)
  }
  
  createActor() {
    const actor: Actor = {
      id: Math.round(Math.random() * 100),
      name: this.nameTemplate[Math.floor(Math.random() * this.nameTemplate.length)],
      level: 1,
      stats: {
        hp: Math.ceil(Math.random() * 50),
        mp: Math.ceil(Math.random() * 25),
        strength: Math.ceil(Math.random() * 10),
        defence: Math.ceil(Math.random() * 10),
        agility: Math.ceil(Math.random() * 10)
      },
      isEnemy: false
    };
    
    this.store.dispatch(new actions.Create(actor))
  }

  updateActor(id: string, level: number, stats: Stats) {
    this.store.dispatch(new actions.Update(id, {level: level, stats: stats}))
  }

  deleteActor(id: string) {
    this.store.dispatch(new actions.Delete(id))
  }

  deleteAll() {
    this.store.dispatch(new actions.DeleteAll())
  }

}
