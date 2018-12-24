import {Component, OnInit} from '@angular/core';
import * as fromFilter from '../../filter/filter.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {TodoModel} from '../models/todo.model';
import {EliminarAllTodoAction} from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filters: fromFilter.Filters[] = ['TODOS', 'COMPLETADOS', 'PENDIENTES'];
  filterSelected: fromFilter.Filters = 'TODOS';
  totalPendientes = 0;

  constructor(private store: Store<AppState>) {
    this.store.subscribe(state => {
      this.filterSelected = state.filter;
      this.contarPendientes(state.todos);
    });
  }

  ngOnInit() {
  }

  cambiarFiltro(filter: fromFilter.Filters) {
    const action = new fromFilter.SetFilterAction(filter);
    this.store.dispatch(action);
  }

  contarPendientes(todos: TodoModel[]) {
    this.totalPendientes = todos.filter(todo => !todo.completado).length;
  }

  limpiarCompletados() {
    const action = new EliminarAllTodoAction();
    this.store.dispatch(action);
  }

}
