import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  ApiURL:string ='http://api.products.luezoid.com/products'
  auth_token: string = 'ULxG9gG98KDGPql/BFI/woCN9T8='
  
  //http://api.products.luezoid.com/products?page=1
  cartItems: BehaviorSubject<any[]> = new BehaviorSubject<any[]> ([])
  constructor(private _http: HttpClient) { }

  getProductList(pageNo:number = 1){
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    })
    const options = {
      headers: header,
    };
    return this._http.get(this.ApiURL+ `?page=`+pageNo,options)
  }

  addItemToCart(newItem: any){
    this.cartItems.value.push(newItem)
  }
}
