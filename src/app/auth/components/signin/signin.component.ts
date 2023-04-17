import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private toastr: ToastrService , private auth:AuthService , private router:Router) { }

  ngOnInit(): void {
  }
  loginForm:FormGroup=new FormGroup({
    credential: new FormControl(null,/*[Validators.required , Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]*/),
    password: new FormControl(null,/*[Validators.required , Validators.minLength(6)]*/),
  })
  submitForm()
  {
    this.auth.login(this.loginForm.value).subscribe((res)=>{
      console.log(res)
      if(res.message == 'wrong password')
      {
        this.toastr.error('error', 'asd');

      }
      else
      {
        this.toastr.success('success', 'Sign in Successfully');

        this.router.navigate(['auth/signin'])
      }
    })
  console.log(this.loginForm.value)
  }

}
