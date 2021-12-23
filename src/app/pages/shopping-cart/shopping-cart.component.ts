import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public quantity = 1;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public homeClicked() {
    this.router.navigate(['home']);
  }

  public minusQuantity() {
    this.quantity--;
  }

  public plusQuantity() {
    this.quantity++;
  }

}
