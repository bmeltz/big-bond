import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadStripe } from '@stripe/stripe-js';

import { environment } from 'src/environments/environment';
declare var require: any
@Component({
  selector: 'app-store-cart',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  public price: number = 80.0;
  public quantity: number;
  public checkboxStatus: boolean = false;
  origin = window.location.origin;
  success_url = origin.concat("/success");
  cancel_url = origin.concat("/cart");
  // change these to the live values when the time comes
  priceId = environment.PRICE_BAND;
  stripePromise = loadStripe(environment.STRIPE_PUBLISHABLE_KEY);

  test_mode = true;
 
  constructor() { }

  ngOnInit(): void {
    if(this.test_mode) {
      this.priceId = environment.TEST_PRICE_BAND;
      this.stripePromise = loadStripe(environment.STRIPE_TEST_PUBLISHABLE_KEY);
    }
    // if(window.sessionStorage.getItem("quantity") == null) {
    //   this.quantity = 1;
    // }
    // else {
    //   this.quantity = +window.sessionStorage.getItem("quantity");
    // }

    this.testfunc();

  }

  async testfunc() {
    console.log("yo does this even work??");

    const stripe = require('stripe')('sk_test_51JHiV9L2xwG7RCwgEtYrcHDj69dXwqZwYD9llUJVVAXvryq2VgyKLNseoOyUWyT12XFIhY5KiCFopLU9MaNR4uKX00eGRScZrf');
    console.log("what about here??");

    const product = await stripe.products.retrieve(
      'prod_MBJa4KYuE2iu5Y'
    );
    console.log("or even here??");

    console.log(product);
  }

  public onCheckboxChange() {
    console.log(this.checkboxStatus);
    this.checkboxStatus = !this.checkboxStatus;
  }

  public updateSessionQuantity() {
    window.sessionStorage.setItem("quantity", this.quantity.toString());
  }


  async checkout() {

    // this call is probably unnecessary, but can't hurt.
    this.updateSessionQuantity();
    // Call your backend to create the Checkout session.
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await this.stripePromise;
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [
        { 
          price: this.priceId,
          quantity: this.quantity
        }
      ],
      // shippingAddressCollection: {allowedCountries: ["US"]},
      successUrl: this.success_url,
      cancelUrl: this.cancel_url,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    if (error) {
      console.log(error);
    }

  }

}

interface Product {
  image: string;
  quantity: number;
  name: string;
  description: string;
  price: number;
  maximumQuantity: number;
}

