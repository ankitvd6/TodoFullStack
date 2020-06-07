import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item.component';
import { TodoItemListComponent } from './todo-item-list.component';
import { TodoFormComponent } from './todo-form.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TodoEditFormComponent } from './todo-edit-form.component';
import { TodoArchiveListComponent } from './archives/todo-archive-list.component';
import { SortByPipe } from './pipes/sortBy';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoItemListComponent,
    TodoFormComponent,
    DashboardComponent,
    TodoEditFormComponent,
    TodoArchiveListComponent,
    SortByPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
