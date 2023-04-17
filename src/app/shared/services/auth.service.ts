import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userType = new BehaviorSubject("null");

  constructor(private _HttpClient:HttpClient 
    , private _Router:Router) 
    {
      if(localStorage.getItem('token'))
      {
        this.setUserData();
      }
      console.log(environment.ApiUrl)
      //console.log("asdasdasd")
  }
  register(registerData:any):Observable<any>
  {
    return this._HttpClient.post(`${environment.ApiUrl}/signup`,registerData);
  }
  login(loginData:any):Observable<any>
  {
    return this._HttpClient.post(`${environment.ApiUrl}/signin`,loginData);
  }
  setUserData()
  {
    //const token = ;
    /*const userData:any =localStorage.getItem('userData');
    this.userType.next(userData.type);
    return userData ;*/
  }
  logOut()
  {
   localStorage.removeItem('userData')
    this.userType.next("null");
    this._Router.navigate(['auth/signin']);
  }
}
