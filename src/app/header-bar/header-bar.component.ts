import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../product-list/products.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  $cartItems: Observable<any[]> | undefined
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.$cartItems =  this.productsService.cartItems
  }

}
