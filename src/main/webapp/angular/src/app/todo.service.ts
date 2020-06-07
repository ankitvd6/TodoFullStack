import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo';
import { TODOS } from './mock-todos';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: "root",
})
export class TodoService{
    private baseUrl: string = "http://localhost:8080/api/todos";

    constructor(private httpClient: HttpClient){}

    newGetAll() {
        return this.httpClient.get(`${this.baseUrl}`);
    }
    newAddTodo(todo: Todo){
        let body = JSON.stringify(todo);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.httpClient.post(this.baseUrl,body,{headers});
    }
    newGetTodoById(id){
        return this.httpClient.get(`${this.baseUrl}/${id}`);
    }
    newUpdateTodo(todo: Todo) {
        let body = JSON.stringify(todo);
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.httpClient.put(this.baseUrl,body,{headers});
    }
    newDeleteTodo(id: number) {
        return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }
    
    getAll(): Observable<Todo[]>{
        return of(TODOS);
    }

    add(todo: Todo): Observable<void>{
        let heading = todo.heading;
        let todoTemp = TODOS.find(todo => todo.heading === heading);
        let index = TODOS.indexOf(todoTemp);
        console.log(`-----index of todo-------> ${index}`);
        if(index === -1){
            TODOS.push(todo);
            console.log("sucessfully added");
        }
        else{
            TODOS[index].heading = todo.heading;
            TODOS[index].description = todo.description;
            TODOS[index].dueDate = todo.dueDate;
            console.log(" successfully updated ");
        }
        return of();    
    }

    delete(todo: Todo): Observable<void>{
        let index = TODOS.indexOf(todo);
        if(index >= 0){
            TODOS.splice(index,1);
        }
        return of();
    }

    update(todo: Todo, index: number): Observable<void>{
        // console.log(`${todo.heading}`);
        // let index = TODOS.indexOf(todo);
        console.log("index "+ index);
        TODOS[index].heading = todo.heading;
        TODOS[index].description = todo.description;
        TODOS[index].dueDate = todo.dueDate;
        console.log(" successfully updated ");
        return of();
    }

    getTodoByHeading(heading: string): Observable<Todo>{
        return of(TODOS.find(todo => todo.heading === heading));
    }

    getTodoUpdateElement(heading: string): Observable<TodoUpdateItem>{
        let todo = TODOS.find(todo => todo.heading === heading);
        console.log(`--------Service -------> found todo , heading : ${todo.heading}, description : ${todo.description}, index : ${TODOS.indexOf(todo)}`);
        const todoUpdateElement: TodoUpdateItem = {index:0, todo: {}};
        
        todoUpdateElement.index = TODOS.indexOf(todo);
        todoUpdateElement.todo = todo;
        return of(todoUpdateElement);
    }

    getTodo(todo: Todo): Observable<Todo>{
        let index = TODOS.indexOf(todo);
        if(index >= 0){
            console.log(TODOS[index]);
            return of(TODOS[index]);
        }
        else
            return of(null);
    }

}

interface TodoUpdateItem{
    todo;
    index;
}