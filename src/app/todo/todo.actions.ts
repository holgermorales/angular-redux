import {Action} from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle all todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const ELIMINAR_TODO = '[TODO] Eliminar todo';
export const ELIMINAR_ALL_TODO = '[TODO] ELiminar all todo';

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;

  constructor(public payload: string) {
  }
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public payload: number) {
  }
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;

  constructor(public payload: boolean) {
  }

}

export class EditarTodoAction implements Action {
  readonly type = EDITAR_TODO;

  constructor(public payload: { id: number, texto: string }) {

  }
}

export class EliminarTodoAction implements Action {
  readonly type = ELIMINAR_TODO;

  constructor(public payload: number) {
  }
}

export class EliminarAllTodoAction implements Action {
  readonly type = ELIMINAR_ALL_TODO;

}

export type Actions =
  AgregarTodoAction
  | ToggleTodoAction
  | EditarTodoAction
  | EliminarTodoAction
  | ToggleAllTodoAction
  | EliminarAllTodoAction;
