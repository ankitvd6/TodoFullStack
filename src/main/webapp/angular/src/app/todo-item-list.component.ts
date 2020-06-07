import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'td-item-list',
    templateUrl: './todo-item-list.component.html',
    styleUrls: ['todo-item-list.component.css'],
})

export class TodoItemListComponent implements OnInit{
    todos$: Observable<any>;
    selectedTodo;
    c='false';
    @Input() searchInput='';
    @Input() sortOrder = '';
    @Input() sortParameter = '';

    constructor(private todoService: TodoService, private router: Router){}

    // compareString(a,b) {
    //     const headingA = a.heading.replace(/\s/g,'').toUpperCase();
    //     const headingB = b.heading.replace(/\s/g,'').toUpperCase();

    //     let comparison = 0;
    //     if(headingA > headingB) { comparison = 1; }
    //     else if(headingA < headingB) { comparison = -1; }
    //     return comparison;
    // }
    // compareStringDesc(a,b) {
    //     const headingA = a.heading.toUpperCase();
    //     const headingB = b.heading.toUpperCase();

    //     let comparison = 0;
    //     if(headingA > headingB) { comparison = 1; }
    //     else if(headingA < headingB) { comparison = -1; }
    //     return comparison * -1;
    // }

    ngOnInit(){
        // console.log("item-list-INIT--->");
        
        this.todos$ = this.todoService.newGetAll(); 
        // this.todos$.subscribe(item => {
            // console.log(` ${typeof item}`);
            // item.sort(this.compareString);
            // item.forEach(element => {
                // console.log(element);
                
            // });
        // });     
    }

    getAllTodos(){
        // this.todoService.getAll().subscribe((todos) => {
        //     this.todos = todos;
        // });
        this.todoService.newGetAll().subscribe((resp) => {
            this.todos$ = resp[0];
            // console.log("todos------> "+this.todos$[0].heading);            
        });
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