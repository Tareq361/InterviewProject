import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {
  private baseUrl = 'http://localhost:8080/api/patients';


  constructor(private http: HttpClient) { }

  getPatientList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  deletePatient(id: number|undefined): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  createPatient(patient: Object,newf?:File): Observable<Object> {
    console.log(patient);
    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("patient", new Blob([JSON.stringify(patient)],{type:'application/json'}));
    formData.append("image", newf);
    console.log("service call")
    console.log(newf.name)
    console.log(formData)
    return this.http.post(`${this.baseUrl}`,
      formData);


  }

  getPatient(id: number | undefined): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updatePatient(patient: Object,newf?:File,id?: number | undefined, ): Observable<Object> {

    const formData = new FormData();

    // Store form name as "file" with file data
    formData.append("patient", new Blob([JSON.stringify(patient)],{type:'application/json'}));
    formData.append("image", newf);
    console.log("service call")
    console.log(newf)
    console.log(patient)
    console.log("service off")
    return this.http.put(`${this.baseUrl}/${id}`, formData);
  }

}
