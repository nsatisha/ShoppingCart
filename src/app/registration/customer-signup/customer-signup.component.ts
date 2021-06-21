import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer } from '../customer.model';
import { RoutingService } from 'src/app/shared/routing.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {


  customerForm: FormGroup;
  form: Customer;

  userNameInValid = null;
  mobileInValid = null;
  emailInValid = null;
  passwordInValid = null;
  emailError = '';

  constructor(private routingService: RoutingService) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    let custusername = '';
    let custmobile = '';
    let custemail = '';
    let custpassword = '';

    this.customerForm = new FormGroup({
      username: new FormControl(custusername, Validators.required),
      mobile: new FormControl(custmobile, [Validators.required, Validators.pattern(/^((\+)?(\d{2}[-]))?(\d{10}){1}?$/)]),
      email: new FormControl(custemail, [Validators.required, Validators.email]),
      password: new FormControl(custpassword, Validators.required)
    });

    this.customerForm.get('username').valueChanges.subscribe(() => {
      if (this.customerForm.get('username').status === 'INVALID') {
        this.userNameInValid = true;
      } else {
        this.userNameInValid = false;
      }
    });

    this.customerForm.get('mobile').valueChanges.subscribe(() => {
      if (this.customerForm.get('mobile').status === 'INVALID') {
        this.mobileInValid = true;
      } else {
        this.mobileInValid = false;
      }
    });

    this.customerForm.get('email').valueChanges.subscribe(() => {
      if (this.customerForm.get('email').value === '') {
        this.emailInValid = true;
        this.emailError = 'Required Field';
      } else if (this.customerForm.get('email').status === 'INVALID') {
        this.emailInValid = true;
        this.emailError = 'Enter Valid Format';
      } else {
        this.emailInValid = false;
      }
    });

    this.customerForm.get('password').valueChanges.subscribe(() => {
      if (this.customerForm.get('password').status === 'INVALID') {
        this.passwordInValid = true;
      } else {
        this.passwordInValid = false;
      }
    });

  }

  onSignup() {

    console.log(this.customerForm.value);
    this.routingService.saveCustomer(this.customerForm.value);
  }

}
