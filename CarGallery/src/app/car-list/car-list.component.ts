import { Component, OnInit } from '@angular/core';
import {CarDataService} from '../car-data.service';
import {Car}  from '../entitys/car';
import {CarList} from '../car-list/car.list';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  _carList : Car[];
  
  constructor(private carDataService : CarDataService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._carList = this.carDataService.getCars();
  }


}
