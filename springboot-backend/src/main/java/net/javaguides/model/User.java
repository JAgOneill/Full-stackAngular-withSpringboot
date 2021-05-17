package net.javaguides.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/*
 *step 1 lets create a JPA entity here
 */
@Entity
@Table(name="users")
// if we dont mention name here it will consider the name of class 
public class User {
	
	//id is the primary key 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="first_name")
	private String FirstName;
	@Column(name="last_name")
	private String LastName;
	@Column(name="email")
	private String Email;
	/*
	 * Step 2 lets create 3 variables and create its getter and setters and default
	 * one parameterized constructor we also need to annotate them
	 */

	/*
	 * step3
	 */
	
	public User()
	{}

	
	public User(String firstName, String lastName, String email) {
		super();
		FirstName = firstName;
		LastName = lastName;
		Email = email;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return FirstName;
	}
	public void setFirstName(String firstName) {
		FirstName = firstName;
	}
	public String getLastName() {
		return LastName;
	}
	public void setLastName(String lastName) {
		LastName = lastName;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	
}
