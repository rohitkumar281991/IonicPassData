import { Injectable } from '@angular/core';

@Injectable()
export class User {

  name:string = "ABC";
  constructor() {
    console.log('Hello User Provider');
  }

}
