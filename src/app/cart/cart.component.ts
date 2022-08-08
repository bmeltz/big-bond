import { Component, OnInit } from '@angular/core';

import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
// import products from '@assets/products.json';
import { CartService, Product } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public checkboxStatus: boolean = false;
  origin = window.location.origin;
  success_url = origin.concat("/success");
  cancel_url = origin.concat("/cart");
  // change these to the live values when the time comes
  publishable_key: string = environment.STRIPE_PUBLISHABLE_KEY;
  stripePromise: any;
  test_mode = true;

 
  constructor(private _cart: CartService) { }

  ngOnInit(): void {
    if(this.test_mode) {
      this.publishable_key = environment.STRIPE_TEST_PUBLISHABLE_KEY;
    }
  }

  // public onCheckboxChange() {
  //   console.log(this.checkboxStatus);
  //   this.checkboxStatus = !this.checkboxStatus;
  // }

  private buildLineItems() {
    var cart_items = this._cart.itemsInCart;
    var line_items = [];
    for(let productId in cart_items) {
      line_items.push({
        price: cart_items[productId].priceId,
        quantity: cart_items[productId].quantity
      })
    }
    return line_items;
  }

  async checkout() {
    if(this.buildLineItems().length != 0)
    {
      this.stripePromise = loadStripe(this.publishable_key);

      // this call is probably unnecessary, but can't hurt.
      // this.updateSessionQuantity();
      // Call your backend to create the Checkout session.
      // When the customer clicks on the button, redirect them to Checkout.
      const stripe = await this.stripePromise;
      const { error } = await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems: this.buildLineItems(),
        shippingAddressCollection: {allowedCountries: ["US"]},
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
    else{
      alert("cart is empty!")
      // this._snackBar.open("no items in cart", "close");
    }


  }

}

