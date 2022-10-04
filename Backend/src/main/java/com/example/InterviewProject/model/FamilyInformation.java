package com.example.InterviewProject.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.example.InterviewProject.model.patient;
@Entity
@Table(name = "Family_imformation")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FamilyInformation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String relation;
	private String phoneNumber;

}
