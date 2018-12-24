import {Component, OnInit} from '@angular/core';
import {TodoModel} from '../models/todo.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import * as fromFilter from '../../filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: TodoModel[];
  filter: fromFilter.Filters;

  constructor(private store: Store<AppState>) {
    this.store
      .subscribe(state => {
        this.todos = state.todos;
        this.filter = state.filter;
      });
  }

  ngOnInit() {

  }

}
