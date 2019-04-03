import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Injectable(
    { providedIn: 'root' }
)
export class LoginService {
    constructor(private router: Router, private dbService: DatabaseService) { }

    goToLoginState = () => {
        this.router.navigate(['login']);
    }

    userLogin(email, pass) {
       return this.dbService.login(email, pass);
    }

}
