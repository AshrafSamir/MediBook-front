import { Injectable } from '@angular/core';
import { environment } from '../../../../api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminserviceService {
  constructor(private _httpClient: HttpClient) {}
  getUsers(type: string): Observable<any> {
    if (type) return this._httpClient.get(`${environment.ApiUrl}/all${type}`);
    else return this._httpClient.get(`${environment.ApiUrl}/allusers`);
  }
  getUsersCount():Observable<any>{
    return this._httpClient.get(`${environment.ApiUrl}/usercount`);
    }
  getDoctorsMostRated():Observable<any>{
    return this._httpClient.get(`${environment.ApiUrl}/mostrated`);
  }
  getAllBookings():Observable<any>{
    return this._httpClient.get(`${environment.ApiUrl}/allbookings`);
  }
}
