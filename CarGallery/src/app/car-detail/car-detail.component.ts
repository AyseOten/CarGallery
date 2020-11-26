import { Component, OnInit } from '@angular/core';
import { Car } from '../entitys/car';
import { CarList } from '../car-list/car.list';
import { CarDataService } from '../car-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { createHostListener } from '@angular/compiler/src/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  id;
  result;
  info1; info2; info3;
  nameCar;
  typeCar;
  photoCar; 
  priceCar;
  constructor(private carDataService: CarDataService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // subscribe to the parameters observable
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');

    });

    // if (CarList && CarList.length > 0) {

    //   this.result = CarList.find((car) => {
    //     return car.id === this.id;
    //   })
    // }     
  
    this.nameCar = CarList[this.id].name;
    this.typeCar = CarList[this.id].type;
    this.priceCar = CarList[this.id].price;

    this.info1 = "Car name: " + this.nameCar;
    this.info2 = "Car type: "+ this.typeCar;
    this.info3 = "Car price :" + this.priceCar + '$';
  }

  deleteCar() 
  {
    CarList.splice(this.id,1);
    this.router.navigate(["/car-list"]);
  }


}

