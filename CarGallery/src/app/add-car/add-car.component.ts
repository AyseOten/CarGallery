import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule,FormsModule} from '@angular/forms';
import {CarDataService} from '../car-data.service';
import {Car}  from '../entitys/car';
import {CarList} from '../car-list/car.list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  infoDiv:boolean=false;
  carName;
  carPrice;
  carType;
  carPhoto;
  carId ;

  carForm = new FormGroup({
    name: new FormControl('',Validators.required),
    price: new FormControl('', Validators.required),
    type: new FormControl(''),
    photo: new FormControl('')
  });

  constructor(private router:Router) {}

  ngOnInit(): void {
  }

  onSubmit(){
    
    this.carId = CarList.length;
    this.carName = this.carForm.get('name');
    this.carPrice = this.carForm.get('price');
    this.carType = this.carForm.get('type');
    this.carPhoto = this.carForm.get('photo');

    // yeni car elemanını ekliyoruz
    CarList.push({'id':this.carId,'name': this.carName,'price':this.carPrice,'type':this.carType,'photo':this.carPhoto});
    console.log(CarList);
    this.router.navigate(["/car-list"]);
  }

  displayDiv() {
    this.infoDiv = true;
  }
 

}
