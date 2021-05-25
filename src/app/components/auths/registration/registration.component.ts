import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  regForm : FormGroup;

  constructor(private fb : FormBuilder, private auth : AuthService) { }

  ngOnInit(): void {
    this.regForm = this.fb.group(
      {
        firstname : [null, [Validators.required, Validators.minLength(3)]],
        lastname : [null, [Validators.required, Validators.minLength(3)]],
        email : [null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
        password : [null, [Validators.required, Validators.minLength(5)]]
      }
    )
  }

  submit(){
    console.log(this.regForm.value)

    this.auth.registration(this.regForm.value).subscribe( e => {
      console.log(e);
    },
    (error) => {
      console.log(error);
    }
    )
  }

}
