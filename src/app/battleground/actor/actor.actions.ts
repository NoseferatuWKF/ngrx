import { Action } from '@ngrx/store';
import { Actor } from '../../model/actor-model';

export const CREATE = '[Actors] Create';
export const UPDATE = '[Actors] Update';
export const DELETE = '[Actors] Delete';
export const DELETE_ALL = '[Actors] DeleteAll';

export class Create implements Action {
    readonly type = CREATE;
    constructor(public actor: Actor) {}
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor(public id: string, public changes: Partial<Actor>) {}
}

export class Delete implements Action {
    readonly type = DELETE;
    constructor(public id: string) {}
}

export class DeleteAll implements Action {
    readonly type = DELETE_ALL;
    constructor() {}
}

export type ActorActions = Create | Update | Delete | DeleteAll;