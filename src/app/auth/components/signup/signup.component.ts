import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      image: [''],
      gender: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }

  submitForm() {

    console.log(this.signupForm.value)
  }

  onFileSelected(event:any) {
    //const file = event.target.files[0];
    //const formData = new FormData();
    //formData.append('file', file);
    // Send the form data to the server
    this.signupForm.controls['image']?.setValue(event.target.files[0].name)
    //console.log(event.target.files[0].name)
  }

}


