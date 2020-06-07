import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { TodoService } from './todo.service';
import { Todo } from './todo';


@Component({
    selector: 'td-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit{
    // @Input() todoItem;
    id: string;
    todoItem ;
    // @Output() deleteItem = new EventEmitter();
    
    constructor(private activatedRoute: ActivatedRoute, private location: Location, private todoService: TodoService,
        private router: Router){}

    ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.todoService.newGetTodoById(parseInt(this.id,10)).subscribe(todoItem => {
            this.todoItem = todoItem;
        });
    }

    editTodo(todoItem: Todo) {
        this.router.navigateByUrl(`/edit/${todoItem.id}`);
    }


    // onDelete(todoItem: Todo){
    //     this.deleteItem.emit(this.todoItem);
    //     this.todoService.delete(todoItem);
    // }

    
    
    // getTodo(): void{
    //     let heading = this.activatedRoute.snapshot.paramMap.get('heading');
    //     this.todoService.getTodoByHeading(heading).subscribe(todoItem => this.todoItem = todoItem);
    // }

    goBack(): void {
        this.location.back();
    }

}