import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'Camiseta 1',
      'This is the first camiseta. New, lovely materials',
      100
    ),
    new Product(
      2,
      'Camiseta 2',
      'This is the second camiseta. Lovely new',
      120
    ),
    new Product(
      3,
      'Camiseta 3',
      'This is the third camiseta. New, lovely materials',
      130
    ),
    new Product(
      4,
      'Camiseta 4',
      'This is the fourth camiseta. New, lovely',
      150
    ),
    new Product(
      5,
      'Camiseta 5',
      'This is the fifth camiseta. New, lovely materials',
      160
    ),
    new Product(
      6,
      'Camiseta 6',
      'This is the sixth camiseta. New, lovely materials',
      180
    ),
    new Product(
      7,
      'Camiseta 7',
      'This is the seventh camiseta. New, lovely',
      200
    ),
    new Product(
      8,
      'Camiseta 8',
      'This is the eight camiseta. New, lovely',
      220
    ),
    new Product(
      9,
      'Camiseta 9',
      'This is the ninth camiseta. New, lovely',
      250
    ),
  ];

  constructor() {}
  getProducts(): Product[] {
    return this.products;
  }
}
