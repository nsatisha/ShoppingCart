import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RoutingService } from 'src/app/shared/routing.service';
import { CustomerSignupComponent } from '../customer-signup/customer-signup.component';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css', '../customer-signup/customer-signup.component.css']
})
export class CustomerLoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = null;

  constructor(private routingservice: RoutingService) {

  }

  ngOnInit(): void {
    console.log('ngOninit', this.routingservice.loading);
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onLogin() {
    console.log('Hello');
    this.routingservice.getUser(this.loginForm.get('username').value, this.loginForm.get('password').value);

  }

}
