import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';


@Injectable(
    { providedIn: 'root' }
)
export class HomeService {
    constructor(private router: Router, private dbService: DatabaseService) {}

    goToHomeState = () => {
        this.router.navigate(['home']);
    }

    currentUser(){
        return this.dbService.currentUser();
    }
}