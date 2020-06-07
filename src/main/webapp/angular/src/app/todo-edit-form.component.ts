import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TodoService } from './todo.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Todo } from './todo';

@Component({
    selector: 'td-edit-form',
    templateUrl: './todo-edit-form.component.html',
    styleUrls: ['./todo-edit-form.component.css'],
})

export class TodoEditFormComponent implements OnInit {
    formGroup: FormGroup;
    todoItem;
    updateIndex: number;
    id: number;

    constructor(private formBuilder: FormBuilder, private todoService: TodoService,
        private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit(){
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        this.id = parseInt(id);
        this.formGroup = this.formBuilder.group({
            id: this.formBuilder.control(''),
            heading : this.formBuilder.control(''),
            description: this.formBuilder.control(''),
            priority: this.formBuilder.control(''),
            status: this.formBuilder.control(''),
            dueDate: this.formBuilder.control(''),
        });
        this.todoService.newGetTodoById(this.id).subscribe(todoItem => {
            this.formGroup.setValue(todoItem);
            
        });  
    }

    onSubmit(){   
        this.todoService.newUpdateTodo(this.formGroup.value).subscribe(() => this.router.navigateByUrl(''));
          
    }
}

interface TodoUpdateItem{
    todo : Todo;
    index : number;
}