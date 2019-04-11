import { Injectable, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Injectable({
  providedIn: 'root'
})
export class AddExpensesService {
  User: string;

  constructor(private dbService: DatabaseService) { }

  /*OBTENGO EL USUARIO ANTES DE AGREGAR EL NUEGO GASTO */


  /* AGREGAR */
  add = (item: any) => {
    item = Object.assign(item, { 'addedBy': this.dbService.currentUser });
    return this.dbService.addRecord(item);
  }
}
