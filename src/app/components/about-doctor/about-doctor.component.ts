import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-about-doctor',
  templateUrl: './about-doctor.component.html',
  styleUrls: ['./about-doctor.component.scss']
})
export class AboutDoctorComponent implements OnInit {
doctorId:any;
doctorInfo:any;
isLoaded:any;
userId:any;
username:any;
rateFormControll=new FormControl('',Validators.required);
message=new FormControl('');
  constructor(private route:ActivatedRoute , private toastr: ToastrService, private auth:AuthService,private http:HttpClient,private router:Router) { }
 
  
  ngOnInit(): void {
    this.isLoaded=false;
    this.route.queryParams.subscribe((params)=>{
this.doctorId=params['id'];
 this.auth.userdata.subscribe((value:any)=>{
  this.userId=value._id;
  this.username=value.name;
})
this.getDoctorInfo()
    })
  }

  getDoctorInfo()
  {
    this.http.get(`http://localhost:3000/doctor/${this.doctorId}`).pipe(map((res:any)=>{
      let {name,mobilePhone,clinicAddress,imageUrl,specification,doctorRate}=res['doctor'];
      if(!imageUrl)imageUrl='assets/img/doctors/doctors-1.jpg';
this.doctorInfo={name,mobilePhone,clinicAddress,imageUrl,specification,doctorRate};
return res;
    })).subscribe(res=>this.isLoaded=true);
  }
  showTimeSlots()
  {
this.router.navigate(['/Availabletimes'],{queryParams:{id:this.doctorId}});

  }
  submitRating()
  {
    const httpOptions = {
      headers: new HttpHeaders({      
        'auth':localStorage.getItem('token')
      })
    };
    console.log("jjj",this.rateFormControll.value,this.username);
    this.http.post(`http://localhost:3000/addRate/${this.doctorId}`,{username:this.username,rate:this.rateFormControll.value},httpOptions).subscribe((res:any)=>{
     if(res.message=="rating send successfully")this.toastr.success('success', res.message);
     else{
      this.toastr.error('failed', res.message);
     }
      console.log(res);
      this.rateFormControll.setValue('');
    });
    
  }
}