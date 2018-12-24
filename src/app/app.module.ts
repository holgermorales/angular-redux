import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {TodoComponent} from './todo/todo.component';
import {TodosListComponent} from './todo/todos-list/todos-list.component';
import {TodoItemComponent} from './todo/todo-item/todo-item.component';
import {TodoFooterComponent} from './todo/todo-footer/todo-footer.component';
import {TodoAddComponent} from './todo/todo-add/todo-add.component';
import {StoreModule} from '@ngrx/store';
import {TodoReducer} from './todo/todo.reducer';
import {ReactiveFormsModule} from '@angular/forms';
import {appReducer} from './app.reducer';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodosListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    TodoAddComponent,
    FilterPipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
//    StoreModule.forRoot({todos: TodoReducer}),
    StoreModule.forRoot(appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
