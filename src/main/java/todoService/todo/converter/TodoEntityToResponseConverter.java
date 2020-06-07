package todoService.todo.converter;

import java.util.function.Function;

import org.springframework.core.convert.converter.Converter;

import todoService.todo.entity.Todo;
import todoService.todo.response.ResponseTodo;

public class TodoEntityToResponseConverter implements Converter<Todo, ResponseTodo>{
	
	@Override
	public ResponseTodo convert(Todo source) {
		ResponseTodo responseTodo = new ResponseTodo();
		responseTodo.setTitle(source.getheading());
		responseTodo.setDescription(source.getDescription());
		responseTodo.setDueDate(source.getDueDate());
		responseTodo.setId(source.getId());
		return responseTodo;
	}


}
