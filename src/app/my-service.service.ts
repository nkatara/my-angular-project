import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  constructor() { }

cars=['Ford', 'Chevrolet', 'Buick'];

myData(){
  return 'This is my data, man!';
}

}
