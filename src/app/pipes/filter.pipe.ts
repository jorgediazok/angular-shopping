import { Pipe, PipeTransform } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  productList: Product[] = [];
  constructor(private productService: ProductService) {
  }
  transform(value: any, arg: any): any {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    });

    const resultPrices = [];
    for(const price of value){
      if(this.productList === t)
    }
  }
}
