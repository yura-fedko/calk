import { Component, OnInit } from '@angular/core';
import { CAR_AGE, ENGINE, VOLUME, RESULT } from '../main-data'
import { from } from 'rxjs';
import { MainService } from '../main.service'


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})


export class CarComponent implements OnInit {
  ages = CAR_AGE
  engines = ENGINE
  volumes = VOLUME
  results =  RESULT
  constructor(private mainService: MainService) { }

  calk(price, volume, engine, age){
    this.mainService.calk(price, volume, engine, age);
  }
  ngOnInit() {
  }

}
