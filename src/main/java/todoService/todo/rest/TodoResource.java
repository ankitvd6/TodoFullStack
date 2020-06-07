package todoService.todo.rest;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import todoService.todo.converter.TodoEntityToResponseConverter;
import todoService.todo.entity.Todo;
import todoService.todo.repository.TodoRepository;
import todoService.todo.response.ResponseTodo;

@CrossOrigin
@RestController
@RequestMapping(path = "api/todos")
public class TodoResource {
	
	@Autowired
	TodoRepository todoRepository;
	@Autowired
	ConversionService conversionService;

	//Get all Todos
	@RequestMapping(path = "", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Iterable<Todo> getAllTodos(Pageable pageable){
		Page<Todo> todoList = todoRepository.findAll(pageable);
		Iterable<Todo> newTodoList = todoRepository.findAll();
		int size = 0, i=0;
		for(Todo item : newTodoList) {
			size++;
		}
		Todo[] array = new Todo[size];
		
		for(Todo item : newTodoList) {
			array[i] = item;
			i++;
		}
//		return array;
		return newTodoList;
		
	}
	//Get a single todo
	@RequestMapping(path = "{id}", method = RequestMethod.GET)
	public ResponseEntity<Todo> getTodoById(@PathVariable Long id){
		Todo todoEntity = todoRepository.findById(id).get();
		return new ResponseEntity<Todo>(todoEntity, HttpStatus.OK);
	}	
	
		
	//Add a new Todo
	@RequestMapping(path = "", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Todo> addTodo(@RequestBody Todo todo){
		
		Todo todoEntity = todoRepository.save(todo);
		return new ResponseEntity<>(todoEntity,HttpStatus.OK);
	}
	
	//update a todo
		@RequestMapping(path = "", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE,
				produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<Todo> updateTodo(@RequestBody Todo todo){
			
			Todo todoEntity = todoRepository.save(todo);
			return new ResponseEntity<>(todoEntity,HttpStatus.OK);
		}
		
	//Delete a todo
	@RequestMapping(path = "{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteTodo(@PathVariable Long id) {
		
		todoRepository.delete(todoRepository.findById(id).get());
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
}
