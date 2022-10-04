import { Component, OnInit } from '@angular/core';
import {Patient} from "../../Model/patient";
import {Observable} from "rxjs";
import {PatientServiceService} from "../../Service/patient-service.service";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient: Patient= new Patient(0,"",0,"","",null,"",
    "","","",null);
  selectedFile: File;
  submitted = false;

  constructor(private pService: PatientServiceService,
              private router: Router,private fb: FormBuilder) { }
  addpatientForm = this.fb.group({
    name:[null,[Validators.required]],
    age: ["",Validators.required],
    gender: [null,Validators.required],
    dob: ["",Validators.required],
    image: [File,Validators.required],
    imageName: ["",],
    email: ["",[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    phoneNumber: ["",[Validators.required,Validators.pattern("[0-9 ]{11}")]],
    address: ["",],
    familylist: this.fb.group({
      name: [ '', [Validators.required]],
      relation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    }),
  });
  ngOnInit(): void {

  }

  save() {


    this.pService
      .createPatient(this.addpatientForm.value,this.selectedFile).subscribe(data => {
        console.log(data)

        this.gotoList();
      },
      error => console.log(error));
  }
  get title(){
    return this.addpatientForm.get('name');
  }
  get email(){
    return this.addpatientForm.get('email');
  }
  get phone(){
    return this.addpatientForm.get('phoneNumber');
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/Patient']);
  }

  onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }


}

