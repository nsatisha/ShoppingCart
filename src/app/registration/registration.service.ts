import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RoutingService } from '../shared/routing.service';
import { LoggingService } from '../logging.service';


export class RegistrationService implements OnInit {

    constructor(private http: HttpClient, private routingService: RoutingService, private log: LoggingService) { }

    ngOnInit() {
    }

/*     saveCustomer(signupFormValues: Customer) {

        this.http.post('/api/signUp', signupFormValues, {
            headers: { 'Content-Type': 'application/json; charset=UTF-8' }
        });
    } */
}
