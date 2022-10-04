package com.example.InterviewProject.model;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.example.InterviewProject.model.FamilyInformation;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Patient_details")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class patient {
	
	public patient(String name, String gender, String age, String dob, byte[] image, String imageName, String phoneNumber, String email,
			String address,FamilyInformation familylist) {
		super();
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.dob = dob;
		this.image = image;
		this.imageName=imageName;
		this.phoneNumber = phoneNumber;
		this.Email = email;
		this.Address = address;
		this.familylist=familylist;
		
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String gender;
	private String age;
	private String dob;
	@Lob
	private byte[] image;
	
	private String imageName;
	private String phoneNumber;
	private String Email;
	private String Address;
	@OneToOne(targetEntity = FamilyInformation.class,cascade = CascadeType.MERGE)
	@JoinColumn(name = "family_id",referencedColumnName = "id")
	private FamilyInformation familylist;
}
