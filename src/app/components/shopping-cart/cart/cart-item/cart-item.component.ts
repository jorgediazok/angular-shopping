import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: any;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  deleteItem(productId: any) {
    this.delete.emit(productId);
  }
}
