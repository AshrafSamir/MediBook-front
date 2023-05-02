import { Injectable } from '@angular/core';
import { environment } from '../../../../api'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {
  id = JSON.parse(localStorage.getItem('userData'))._id
  constructor(private _HttpClient: HttpClient, private _Router: Router) {
  }
  getUserDoctorFrequency(): Observable<any> {
    return this._HttpClient.get(`${environment.ApiUrl}/userDoctorsFrequency/${this.id}`);
  }
  getUserDepartmentFrequency(): Observable<any> {
    return this._HttpClient.get(`${environment.ApiUrl}/userDepartmentFrequency/${this.id}`);
  }
  getLast3MonthsRes(): Observable<any> {
    return this._HttpClient.get(`${environment.ApiUrl}/userdeptoutcomes/${this.id}`);
  }
}

