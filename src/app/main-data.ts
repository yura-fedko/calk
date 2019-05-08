import { Engine, Item } from './main-classes';
import { Result} from './main-classes'
import { BusComponent } from './bus/bus.component';


export const ENGINE: Engine[] = [
  { name: 'Дизель' },
  { name: 'Бензин' }, 
  
];

export const RESULT: Result= {
  car:{ pdv: '', myto: '', zbir: '', vsogo: '', sum: ''},
  electrocar: { pdv: '', myto: '', zbir: '', vsogo: '', sum: ''},
  truck: {pdv: '', myto: '', zbir: '', vsogo: '', sum: ''},
  bus:{pdv: '', myto: '', zbir: '', vsogo: '', sum: ''}
};
  
export const CAR_AGE = [1, 2, 3, 4, 5, 6, 7, 8,]

export const VOLUME = []

for (var i: number = 0.9; i < 20.1; ) {
  VOLUME.push(i)
  i = +(i + 0.1).toFixed(10)
}