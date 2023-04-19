import { Injectable } from '@angular/core';
import { environment } from '../../../../api'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {
  id:string=''
  header:any =new HttpHeaders().set("auth",localStorage.getItem('token'));

  constructor(private _HttpClient:HttpClient 
    , private _Router:Router) { 
      const userData:any =JSON.parse(localStorage.getItem('userData'));
      this.id=userData._id

      console.log(this.id )

    }
    addSlot(slots:any):Observable<any>
    {
      const httpOptions = {
        headers: new HttpHeaders({      
          'auth':localStorage.getItem('token')
        })
      };
      return this._HttpClient.post(`${environment.ApiUrl}/createtimeslots/${this.id}`,slots,httpOptions);
    }
    getAllSlots():Observable<any>
    {
      const httpOptions = {
        headers: new HttpHeaders({      
          'auth':localStorage.getItem('token')
        })
      };
      return this._HttpClient.get(`${environment.ApiUrl}/doctortimeslots/${this.id}`,httpOptions);
    }

    
}
