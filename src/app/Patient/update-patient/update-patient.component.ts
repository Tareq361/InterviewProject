import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {PatientServiceService} from "../../Service/patient-service.service";
import {Patient} from "../../Model/patient";

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  id?: number;
  patient:Patient= new Patient(0,"",0,"","",null,"",
    "","","",null);
  submitted = false;
  private selectedFile: File;

  constructor(private pService:PatientServiceService, private router: Router,private fb: FormBuilder,private route: ActivatedRoute) { }
  UpdatePatientForm = this.fb.group({
    name:[this.patient.name,[Validators.required]],
    age: [this.patient.age,Validators.required],
    gender: [this.patient.gender,Validators.required],
    dob: [this.patient.dob,Validators.required],
    image: [this.patient.image,],
    imageName: [this.patient.imageName,],
    email: [this.patient.email,[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    phoneNumber: [this.patient.phoneNumber,[Validators.required,Validators.pattern("[0-9 ]{11}")]],
    address: [this.patient.address,],
    familylist: this.fb.group({
      name: [ '', [Validators.required]],
      relation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
    }),
  });
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.pService.getPatient(this.id).subscribe(data=>{

      this.patient=data;
      this.UpdatePatientForm.controls['name'].setValue(this.patient.name);
      this.UpdatePatientForm.controls['age'].setValue(this.patient.age);
      this.UpdatePatientForm.controls['dob'].setValue(this.patient.dob);
      this.UpdatePatientForm.controls['email'].setValue(this.patient.email);
      this.UpdatePatientForm.controls['imageName'].setValue(this.patient.imageName);

      var blob=new Blob([this.patient.image], {type: "image/png"});
      var file = new File([blob], ""+this.patient.imageName);

      this.selectedFile=file
      this.UpdatePatientForm.controls['phoneNumber'].setValue(this.patient.phoneNumber);
      this.UpdatePatientForm.controls['address'].setValue(this.patient.address);
      this.UpdatePatientForm.controls['gender'].setValue(this.patient.gender);
      this.UpdatePatientForm.controls.familylist.setValue({"name":this.patient.familylist.name,"relation":this.patient.familylist.relation,"phoneNumber":this.patient.familylist.phoneNumber})
      this.UpdatePatientForm.controls.familylist['relation'].setValue(this.patient.familylist.relation);
      this.UpdatePatientForm.controls.familylist['phoneNumber'].setValue(this.patient.familylist.phoneNumber);


    })

  }


  get title(){
    return this.UpdatePatientForm.get('name');
  }
  get email(){
    return this.UpdatePatientForm.get('email');
  }
  get phone(){
    return this.UpdatePatientForm.get('phoneNumber');
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  save() {


    this.pService
      .updatePatient(this.UpdatePatientForm.value,this.selectedFile,this.id).subscribe(data => {
        console.log(data)

        this.gotoList();
      },
      error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['/Patient']);
  }

  onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    this.UpdatePatientForm.controls['imageName'].setValue(this.selectedFile.name);
    console.log(this.selectedFile)
  }
}
