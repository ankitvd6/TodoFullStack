package todoService.todo.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import todoService.todo.entity.Todo;

public interface TodoRepository extends PagingAndSortingRepository<Todo, Long>{

}
