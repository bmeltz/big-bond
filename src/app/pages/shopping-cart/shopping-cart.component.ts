import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public quantity = 1;
  public price: number = 20.0;
  priceId = environment.PRICE;
  
  stripePromise = loadStripe(environment.STRIPE_PUBLISHABLE_KEY);

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.getPrice();
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

  public async getPrice() {
    // const stripe = await this.stripePromise ;
    // const stripe = require('stripe')(environment.STRIPE_SECRET_KEY);
    // const price = await stripe.prices.retrieve(environment.PRICE);
    // this.price = price;
  }

}
