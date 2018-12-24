import {Action} from '@ngrx/store';

export const SET_FILTER = '[FILTER] Set filter';

export type Filters = 'TODOS' | 'COMPLETADOS' | 'PENDIENTES';

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;

  constructor(public payload: Filters) {
  }
}

export type Actions = SetFilterAction;
