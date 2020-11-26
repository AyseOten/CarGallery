import { Injectable } from '@angular/core';
import { CarList } from "../app/car-list/car.list";

@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  constructor() {}

  getCars(){
    return CarList;
  }

}
