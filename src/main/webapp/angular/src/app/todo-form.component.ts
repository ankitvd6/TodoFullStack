import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TodoService } from './todo.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Todo } from './todo';

@Component({
    selector: 'td-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.css'],
})

export class TodoFormComponent implements OnInit{
    formGroup: FormGroup;
    todoItem: Todo;

    constructor(private formBuilder: FormBuilder, private todoService: TodoService,
        private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit(){
        console.log(`inside form component ngOnInit function`);
        this.todoItem = history.state.todoItem;
        
        // if(history.state.heading != undefined){
        //     this.formGroup = this.formBuilder.group({
        //         heading : this.formBuilder.control(` ${history.state.heading} `),
        //         description: this.formBuilder.control(` ${history.state.description} `),
        //         dueDate: this.formBuilder.control(` ${history.state.dueDate} `),
        //     });
        // }
        // else{
            this.formGroup = this.formBuilder.group({
                // id: this.formBuilder.control(''),
                heading : this.formBuilder.control(''),
                description: this.formBuilder.control(''),
                priority: this.formBuilder.control(''),
                dueDate: this.formBuilder.control(''),
            });
        // }
    }

    onSubmit(todoItem: Todo){
        // this.todoService.add(todoItem).subscribe(() => {
        //     this.ngOnInit();
        // });
        // this.router.navigateByUrl('/');
        this.todoService.newAddTodo(todoItem).subscribe((todo) => {
            this.ngOnInit();
            this.router.navigateByUrl('');
            console.log("added todo"+todo);
        });
    }
}