import { Injectable } from '@angular/core';
import { environment } from '../../../../api'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private _httpClient:HttpClient) {  
  }
  getUsers(type:string): Observable<any> 
  {
    return this._httpClient.get(`${environment.ApiUrl}/all${type}`)
  }
}
