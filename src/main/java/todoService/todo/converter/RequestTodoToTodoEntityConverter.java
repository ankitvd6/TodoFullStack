package todoService.todo.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;

import todoService.todo.entity.Todo;
import todoService.todo.repository.TodoRepository;
import todoService.todo.request.RequestTodo;

public class RequestTodoToTodoEntityConverter implements Converter<RequestTodo, Todo>{
	@Autowired
	TodoRepository todoRepository;

	@Override
	public Todo convert(RequestTodo source) {
		Todo todoEntity = new Todo();
		todoEntity.setheading(source.getTitle());
		todoEntity.setDescription(source.getDescription());
		todoEntity.setDueDate(source.getDueDate());
		return todoEntity;
	}
}


//@Component
//public class ReservationRequestToReservationEntityConverter
//		implements Converter<ReservationRequest, ReservationEntity> {
//
//	@Autowired
//	RoomRepository roomRepository;
//
//	@Override
//	public ReservationEntity convert(ReservationRequest source) {
//		ReservationEntity reservationEntity = new ReservationEntity();
//		reservationEntity.setCheckin(source.getCheckin());
//		reservationEntity.setCheckout(source.getCheckout());
////		reservationEntity.setRoomEntity(roomRepository.findById(source.getRoomId()).get());
////		if(source.getRoomId() != null) {
//			System.out.println("---------------RoomId: "+source.getRoomId());
////			System.out.println("--------------------"+roomRepository.findById(source.getRoomId()).get().getPrice());
////			reservationEntity.setRoomEntity(roomRepository.findById(source.getRoomId()).get());
////		}
//		return reservationEntity;
//	}
//
//}
//
