package net.javaguides;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.javaguides.model.User;
import net.javaguides.repository.UserRepository;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public void run(String... args) throws Exception {
	
		this.userRepository.save(new User("Sneha","Oneill","snehabapuoneill@gmail.com"));
		this.userRepository.save(new User("Francis","Oneill","foneill@bu.edu"));
		this.userRepository.save(new User("Azure","Oneill","azure@MIT.com"));
		this.userRepository.save(new User("Aqua","Oneill","Aqua@google.com"));
	}
	

}
