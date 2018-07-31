import { Injectable } from '@angular/core';
import GoNFetch from 'go-n-fetch';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  gnf : any;
  valor: number = 1;
  constructor() {

    this.gnf = GoNFetch({
      baseUrl: 'https://jsonplaceholder.typicode.com'
    })
   }
  getDatos() {
    this.gnf.get(`/todos/${this.valor}`).then(response=>{
      console.log(response)
    })
  }
}
