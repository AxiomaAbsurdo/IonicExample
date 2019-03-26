import { LoginService } from './../login/login.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable(
    { providedIn: 'root' }
)
export class HomeService {
    constructor(private router: Router, 
                private LoginService: LoginService) {}

    goToHomeState = () => {
        this.router.navigate(['home']);
    }
}