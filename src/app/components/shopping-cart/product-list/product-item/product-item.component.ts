import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessangerService } from 'src/app/services/messanger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;

  constructor(private message: MessangerService) {}

  ngOnInit(): void {}

  handleAddToCart() {
    this.message.sendMessage(this.productItem);
  }

  scrollTo() {
    if (this.productItem.id === 1) {
      window.scrollTo(0, 90);
    } else if (this.productItem.id === 2) {
      window.scrollTo(0, 700);
    } else if (this.productItem.id === 3) {
      window.scrollTo(0, 900);
    } else if (this.productItem.id === 4) {
      window.scrollTo(0, 3000);
    } else if (this.productItem.id === 5) {
      window.scrollTo(0, 4000);
    } else {
      window.scrollTo(0, 5000);
    }
  }
}
