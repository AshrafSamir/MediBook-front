import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
    test:any;
  constructor(private fb: FormBuilder , private toastr: ToastrService , private auth:AuthService , private router:Router) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, /*Validators.email*/]],
      name: ['', Validators.required],
      mobilePhone: [ '', [Validators.required]],
      type: ['' , [Validators.required]],

      username: ['', Validators.required],
   
      password: ['', [Validators.required, /*Validators.minLength(8)*/]],
      profileImage: [ , [Validators.required]],
     
      gender: ['', Validators.required],
      clinicAddress: ['', Validators.required],
      specification: ['', Validators.required],
      role: ['', Validators.required],

      

      

    });
  }
  ngOnInit(): void {
  }

  submitForm() {

    console.log(this.signupForm.value)
    const formData:any = new FormData();
    const fileInput:any = document.getElementById('image');
    console.log(this.test , 'teeeeeeeeeeeeeeeeeeesat')
   formData.append('profileImage',this.test , this.test.name);
   formData.append('email', this.signupForm.controls['email'].value);
   formData.append('username',this.signupForm.controls['username'].value);
   formData.append('password', this.signupForm.controls['password'].value);
   formData.append('gender', this.signupForm.controls['gender'].value);
   formData.append('type', this.signupForm.controls['type'].value);
   formData.append('mobilePhone', this.signupForm.controls['mobilePhone'].value);
   formData.append('name', this.signupForm.controls['name'].value);
   formData.append('clinicAddress', this.signupForm.controls['clinicAddress'].value);
   formData.append('doctorSpecification', {
    specification:this.signupForm.controls['specification'].value ,
    role:this.signupForm.controls['role'].value
  });


      //console.log(formData['profileImage'])

   this.auth.register(formData).subscribe((res)=>{
        console.log(res)
        if(res.message == 'already logged')
        {
          this.toastr.error('error', 'This mail used already');

        }
        else
        {
          this.toastr.success('success', 'Sign in Successfully');

          this.router.navigate(['auth/signin'])
        }
   })
  }

  onFileSelected(event:any) {
    this.signupForm.controls['profileImage']?.setValue('')
    if(event.target.files[0].type.includes('image/png') || event.target.files[0].type.includes('image/jpeg') ||  event.target.files[0].type.includes('image/jpeg'))
    {
      this.signupForm.controls['profileImage']?.setValue(event.target.files[0])
      this.test = event.target.files[0]
    }
    else
    {
      this.toastr.error('error', 'Enter Valid Image!');
    }
  }
}
