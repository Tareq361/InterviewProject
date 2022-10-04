package com.example.InterviewProject.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.InterviewProject.model.patient;
import com.example.*;
@Repository
public interface PatientRepository extends JpaRepository<patient, Long>{

	

}
