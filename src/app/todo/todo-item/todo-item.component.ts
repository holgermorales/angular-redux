import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TodoModel} from '../models/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {EditarTodoAction, EliminarTodoAction, ToggleTodoAction} from '../todo.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoModel;

  chkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;


  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkField.valueChanges.subscribe(() => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid) {
      return;
    }

    if (this.txtInput.value === this.todo.texto) {
      return;
    }

    const payload = {id: this.todo.id, texto: this.txtInput.value};
    const action = new EditarTodoAction(payload);
    this.store.dispatch(action);
  }

  //No me suscribo al store porque el componente padre(todos-list.component) esta suscrito y este le envia al hijo(todo-item).
  eliminarTodo() {
    const action = new EliminarTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
