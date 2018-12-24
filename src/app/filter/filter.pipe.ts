import {Pipe, PipeTransform} from '@angular/core';
import {TodoModel} from '../todo/models/todo.model';
import * as fromFilter from '../filter/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: TodoModel[], filter: fromFilter.Filters): TodoModel[] {
    console.log(filter);
    switch (filter) {
      case 'COMPLETADOS':
        return todos.filter(todo => todo.completado);
      case 'PENDIENTES':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;

    }
  }

}
