package net.javaguides.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

	

}
