import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessangerService } from 'src/app/services/messanger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;

  constructor(private message: MessangerService, private router: Router) {}

  ngOnInit(): void {}
  id = 1;

  handleAddToCart() {
    this.message.sendMessage(this.productItem);
  }

  route() {
    this.router.navigate(['/details', this.id]);
    console.log(this.productItem);
  }
}
