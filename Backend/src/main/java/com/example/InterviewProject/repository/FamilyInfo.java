package com.example.InterviewProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.InterviewProject.model.FamilyInformation;

public interface FamilyInfo  extends JpaRepository<FamilyInformation, Long>{

}
