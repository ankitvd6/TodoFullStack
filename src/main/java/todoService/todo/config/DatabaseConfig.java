package todoService.todo.config;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableJpaRepositories("todoService.todo.repository")
@EnableTransactionManagement
public class DatabaseConfig {

}
