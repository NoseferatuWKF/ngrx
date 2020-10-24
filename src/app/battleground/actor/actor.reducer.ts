import * as actions from './actor.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

import { Actor } from '../../model/actor-model';

export const actorAdapter = createEntityAdapter<Actor>();

export interface State extends EntityState<Actor> {}

const templateActor = {
    id: ['1'],
    entities: {
        '1': {
            id: 1,
            name: 'Harry',
            level: 1,
            stats: {
                hp: 10,
                mp: 5,
                strength: 1,
                defence: 1,
                agility: 1
            },
            isEnemy: false
        }
    }
}

export const initialState: State = actorAdapter.getInitialState(templateActor);

export function actorReducer(state: State = initialState, action: actions.ActorActions) {
    switch (action.type) {
        case actions.CREATE:
            return actorAdapter.addOne(action.actor, state);
        case actions.UPDATE:
            return actorAdapter.updateOne({id: action.id, changes: action.changes}, state);
        case actions.DELETE:
            return actorAdapter.removeOne(action.id, state);
        case actions.DELETE_ALL:
            return actorAdapter.removeAll(state);
        default:
            return state;
    }
}

export const getActorState = createFeatureSelector<State>('actor');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = actorAdapter.getSelectors(getActorState);