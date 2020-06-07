import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'td-archive-list',
    templateUrl: './todo-archive-list.component.html',
    styleUrls: ['todo-archive-list.component.css'],
})

export class TodoArchiveListComponent implements OnInit{
    todos$: Observable<any>;
    selectedTodo;
    @Input() searchInput='';
    @Input() sortOrder = '';
    @Input() sortParameter = '';

    constructor(private todoService: TodoService, private router: Router){}

   

    ngOnInit(){
        console.log("inside archive component");  
        this.todos$ = this.todoService.newGetAll(); 
        
    }

    onDeleteTodoItem(todoItem: Todo){
        console.log("onDelete clicked"+todoItem.description);
        this.todoService.newDeleteTodo(todoItem.id).subscribe(() => this.ngOnInit());
    }

    showTodoDetail(todoItem){
        console.log("clicked show");
        this.selectedTodo = todoItem;
    }

    toggleCheckBox(e) {
        if(e.checked){
            // todoItem.status = 'completed';
            console.log("checked");
            
        }
    }

}