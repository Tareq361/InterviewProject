package com.example.InterviewProject.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.InterviewProject.model.FamilyInformation;
import com.example.InterviewProject.model.patient;
import com.example.InterviewProject.repository.FamilyInfo;
import com.example.InterviewProject.repository.PatientRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class patient_service {
private final PatientRepository patientRepository;
private final FamilyInfo familyInfo;
public List<patient> getPatients(){
	return patientRepository.findAll();
}

public patient addPatient(patient new_patient, MultipartFile file) throws IOException{
	FamilyInformation new_f= familyInfo.save(new_patient.getFamilylist());
	patient new_p= new patient(new_patient.getName(),new_patient.getGender(),new_patient.getAge(),new_patient.getDob()
			,file.getBytes(),file.getOriginalFilename(),new_patient.getPhoneNumber(),
			new_patient.getEmail(),new_patient.getAddress(),
			new_f
			);
	return patientRepository.save(new_p);
}
public Optional<patient> findPatient(Long id){
return patientRepository.findById(id);
	
}
public String deletePatientById(Long id) {
	patientRepository.deleteById(id);
	return "patient Removed";
}

public patient updatePatient(Long id,patient new_patient,MultipartFile file) throws IOException{
	patient existPatient=patientRepository.findById(id).orElse(null);
	existPatient.setName(new_patient.getName());;
	existPatient.setAge(new_patient.getAge());
	existPatient.setDob(new_patient.getDob());
	if(existPatient.getImageName().equals(new_patient.getImageName())) {
		System.out.print("matched");
		
	}
	else {
		System.out.println("not matched");
		existPatient.setImage(file.getBytes());
		existPatient.setImageName(file.getOriginalFilename());
		
	}
	existPatient.setGender(new_patient.getGender());
	existPatient.setAddress(new_patient.getAddress());
	existPatient.setPhoneNumber(new_patient.getPhoneNumber());
	existPatient.setEmail(new_patient.getEmail());
	existPatient.setFamilylist(new_patient.getFamilylist());
	
	return patientRepository.save(existPatient);
	
}


}
