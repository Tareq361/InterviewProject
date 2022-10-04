import {Component, Input, OnInit} from '@angular/core';
import {PatientServiceService} from "../../Service/patient-service.service";
import {Router} from "@angular/router";
import {Patient} from "../../Model/patient";
import {Observable} from "rxjs";
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Patient Information</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <img src="data:image/png;base64,{{p.image}}" width="100px" height="100px" class="mx-auto d-block rounded-circle" />
      <h5 class="card-title text-center">{{p.name}}</h5>
      <p class="card-text"><strong>Age :</strong> {{p.age}} year</p>
      <p class="card-text"><i class="fa-solid fa-cake-candles"></i> {{p.dob}}</p>

      <p class="card-text"><i class="fa-solid fa-person"></i> {{p.gender}}</p>
      <p class="card-text"><i class="fa-sharp fa-solid fa-envelope"></i> {{p.email}}</p>
      <p class="card-text"><i class="fa-sharp fa-solid fa-phone"></i> {{p.phoneNumber}}</p>
      <p class="card-text"><i class="fa-sharp fa-solid fa-address-book"></i> {{p.address}}</p>
      <h5 class="card-title" style="color: blue">Family Information</h5>
      <br>
      <p class="card-text"><strong>Name :</strong> {{p.familylist.name}}</p>
      <p class="card-text"><strong>Relation :</strong> {{p.familylist.relation}}</p>
      <p class="card-text"> <i class="fa-sharp fa-solid fa-phone"></i> {{p.familylist.phoneNumber}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() p;

  constructor(public activeModal: NgbActiveModal) {}
}
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],

})
export class PatientListComponent implements OnInit {

  closeResult = '';
  patients: Observable<Patient[]> | undefined;

  constructor(private modalService: NgbModal,private pService: PatientServiceService,
              private router: Router) {}

  ngOnInit(): void {
    this.reloadData();

  }
  reloadData() {
    this.patients = this.pService.getPatientList();
  }
  deleteBook(id: number|undefined) {
    var result = confirm("Want to delete?");
    if (result) {
      this.pService.deletePatient(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
    else {
      this.reloadData();
    }

  }

  open(pt:Object) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.p = pt;
  }

}
