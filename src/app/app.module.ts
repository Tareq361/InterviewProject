import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgbdModalContent, PatientListComponent} from './Patient/patient-list/patient-list.component';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { AddPatientComponent } from './Patient/add-patient/add-patient.component';
import { UpdatePatientComponent } from './Patient/update-patient/update-patient.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [
  { path: '', redirectTo: 'Patient', pathMatch: 'full' },
  { path: 'Patient', component: PatientListComponent },
  { path: 'AddPatient', component: AddPatientComponent },
  { path: 'Patient/Update/:id', component: UpdatePatientComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    AddPatientComponent,
    UpdatePatientComponent,
    NgbdModalContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,RouterModule.forRoot(routes), NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
