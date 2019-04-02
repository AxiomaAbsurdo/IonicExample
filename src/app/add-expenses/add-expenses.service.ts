import { Injectable } from '@angular/core';
import { DatabaseService } from '../database.service';

@Injectable({
  providedIn: 'root'
})
export class AddExpensesService {

  constructor(private dbService: DatabaseService) { }

  /* AGREGAR */
  add = (item: any) => {
    return this.dbService.addRecord(item);
  }
}
