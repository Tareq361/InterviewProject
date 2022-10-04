package com.example.InterviewProject.controller;


import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.MediaType;
import com.example.InterviewProject.model.patient;
import com.example.InterviewProject.service.patient_service;

import lombok.AllArgsConstructor;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path ="/api")
@AllArgsConstructor
public class patient_controller {

	private final patient_service pService;
	
	@GetMapping("/patients")
	public List<patient> getPatients(){
		return pService.getPatients();
	}
	
	@PostMapping(value = {"/patients"},consumes= {MediaType.MULTIPART_FORM_DATA_VALUE})
	public patient addPatient(@RequestPart("patient") patient new_patient,@RequestPart("image") MultipartFile file)
	throws IOException
	{
		return pService.addPatient(new_patient,file);
	}
	
	@GetMapping("/patients/{id}")
	public Optional<patient> findPatient(@PathVariable Long id){
		return pService.findPatient(id);
			
		}
	
	@DeleteMapping("/patients/{id}")
	public String deletePatientById(@PathVariable Long id) {
	
		
		return pService.deletePatientById(id);
	}
	
	@PutMapping(value="/patients/{id}",consumes= {MediaType.MULTIPART_FORM_DATA_VALUE})
	public patient updatePatient(@PathVariable Long id,@RequestPart("patient") patient new_patient,@RequestPart("image") MultipartFile file)
	throws IOException
	{
		
	return pService.updatePatient(id, new_patient,file);
	}
}
