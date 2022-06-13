import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: any[] = []
  pagination = { page: 1, pages: 1, perPage: 0 }
  pageArr = []
  constructor(private _productService: ProductsService) { }

  ngOnInit(): void {
    this.getProductList()
  }

  getProductList() {
    this._productService.getProductList(this.pagination.page).subscribe((resp: any) => {
      if (resp.message.toLowerCase() === "success")
        // this.productList = [...this.productList, ...resp.items]
        this.productList = resp.items;
        this.pagination.page = parseInt(resp.page)
        this.pagination.pages = resp.pages
        this.pageArr.length = resp.pages
      })
  }

  addToCart(item: any) {
    this._productService.addItemToCart(item)
  }

  previousPage(){
    this.pagination.page--;
    this.getProductList()
  }

  nextPage(){
    this.pagination.page++;
    this.getProductList()
  }
}

