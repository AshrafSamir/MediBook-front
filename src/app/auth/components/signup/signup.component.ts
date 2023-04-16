import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder , private toastr: ToastrService) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      image: ['' , [Validators.required]],
      gender: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }

  submitForm() {

    console.log(this.signupForm.value)
  }

  onFileSelected(event:any) {
    this.signupForm.controls['image']?.setValue('')
    //const file = event.target.files[0];
    //const formData = new FormData();
    //formData.append('file', file);
    // Send the form data to the server
    if(event.target.files[0].type.includes('image/png') || event.target.files[0].type.includes('image/jpeg') ||  event.target.files[0].type.includes('image/jpeg'))
    {
      console.log(event.target.files[0])
      this.signupForm.controls['image']?.setValue(event.target.files[0].name)
    }
    else
    {
      this.toastr.error('error', 'Enter Valid Image!');
    }
  }

}


