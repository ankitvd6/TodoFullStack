import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './todo-item.component';
import { TodoItemListComponent } from './todo-item-list.component';
import { TodoFormComponent } from './todo-form.component';
import { DashboardComponent } from './dashboard.component';
import { TodoEditFormComponent } from './todo-edit-form.component';
import { TodoArchiveListComponent } from './archives/todo-archive-list.component';


const routes: Routes =[
  { path: 'all', redirectTo: '', pathMatch: 'full'},  
  { path: 'add', component: TodoFormComponent },
  { path: 'archives', component: TodoArchiveListComponent },
  { path: ':id', component: TodoItemComponent},
  { path: 'edit/:id', component: TodoEditFormComponent },
  // { path: '', redirectTo: '/all', pathMatch: 'full'},
  { path: '', component: DashboardComponent },
  { path: '**', redirectTo:'', pathMatch:'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
