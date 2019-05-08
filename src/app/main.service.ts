import { Injectable } from '@angular/core';
import { CAR_AGE, ENGINE, VOLUME, RESULT } from './main-data'
@Injectable({
  providedIn: 'root'
})
export class MainService {
  ages = CAR_AGE
  engines = ENGINE
  volumes = VOLUME
  results =  RESULT
  
  calk(price, volume, engine, age) {
    let stavka: number

    if(engine == 'Бензин'){
      
      if(volume<3){
       stavka = 50
       }else{
        stavka = 100
       }
       
    }else {
      if(volume<3){
        stavka = 75
        }else{
          stavka = 150
        }
    }
    console.log(stavka)
    let pdv = price*0.2;
    let myto = price*0.1
    let zbir = stavka*volume*age

    this.results.car.pdv = pdv
    this.results.car.myto = myto
    this.results.car.zbir = zbir
    this.results.car.vsogo = pdv + myto + zbir
    this.results.car.sum = Number(price) + pdv + myto + zbir
  }
  constructor() { }
}
