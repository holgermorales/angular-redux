import {TodoModel} from './todo/models/todo.model';

import * as fromFilterActions from './filter/filter.actions';
import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';
import {ActionReducerMap} from '@ngrx/store';


export interface AppState {
  todos: TodoModel[];
  filter: fromFilterActions.Filters;
}


export const appReducer: ActionReducerMap<AppState> = {
  todos: fromTodo.TodoReducer,
  filter: fromFilter.filterReducer
};
