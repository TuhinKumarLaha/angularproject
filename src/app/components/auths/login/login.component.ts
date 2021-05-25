import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  val;

  constructor(private auth : AuthService, private store : StorageService, private route : Router) { }

  loginResponse;

  ngOnInit(): void {
  }

  loginSubmit(formvalue){
    // this.val = formvalue;
    console.log(formvalue.value)

    this.auth.login(formvalue.value).subscribe( (response) => {
      console.log(response);
      this.loginResponse = response;
      console.log(this.loginResponse.token);
      this.store.setIitialToken(this.loginResponse.token);

      this.route.navigate(['/products']);
    },
    (error) => {
      console.log(error);
    }
    )
  }

}
