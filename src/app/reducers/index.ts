import { ActionReducerMap } from '@ngrx/store';
import { actorReducer } from '../battleground/actor/actor.reducer';

export const reducers: ActionReducerMap<any> = {
    actor: actorReducer
}