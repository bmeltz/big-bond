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
  public price: number = 80.0;
  public quantity: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(window.sessionStorage.getItem("quantity") == null) {
      this.quantity = 1;
    }
    else {
      this.quantity = +window.sessionStorage.getItem("quantity");
    }
  }

  public homeClicked() {
    this.router.navigate(['home']);
  }

  origin = window.location.origin;
  success_url = origin.concat("/success");
  cancel_url = origin.concat("/cart");
  // change these to the live values when the time comes
  priceId = environment.PRICE;
  stripePromise = loadStripe(environment.STRIPE_PUBLISHABLE_KEY);


  async checkout() {

    window.sessionStorage.setItem("quantity", this.quantity.toString());

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

}
