import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductComponent } from './product/product.component';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  homeClicked() {
    this.router.navigate(['home']);
  }

}
