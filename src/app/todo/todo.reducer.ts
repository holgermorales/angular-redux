//el objetivo del reducer es devilver todo nuevo.
import * as fromTodo from './todo.actions';
import {TodoModel} from './models/todo.model';

const todo1 = new TodoModel('Salvar al mundo');
const todo2 = new TodoModel('Vencer a thanos');
const todo3 = new TodoModel('Pedir prestado el traje de iron man');

todo2.completado = true;
const estadoInicial: TodoModel[] = [todo1, todo2, todo3];

export function TodoReducer(state = estadoInicial, action: fromTodo.Actions): TodoModel[] {
  switch (action.type) {

    case fromTodo.AGREGAR_TODO:
      const todo = new TodoModel(action.payload);
      //Spread operator me devuelve un nuevo objeto.
      return [...state, todo];

    case fromTodo.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {...todo, completado: !todo.completado};
        } else {
          return todo;
        }
      });

    case fromTodo.TOGGLE_ALL_TODO:
      return state.map(todo => {
        return {...todo, completado: action.payload};
      });

    case fromTodo.EDITAR_TODO:
      //El map me devuelve un NUEVO array
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, texto: action.payload.texto};
        } else {
          return todo;
        }
      });

    case fromTodo.ELIMINAR_ALL_TODO:
      return state.filter(todo => !todo.completado);

    case fromTodo.ELIMINAR_TODO:
      //El filter me devuelve un NUEVO array.
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
}
