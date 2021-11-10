import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  priceId = "price_1JmrzpL2xwG7RCwge5NhXYWH";
  product = {
    title: "ISSA WRISTBAND",
    subTitle: "u should buy it",
    description:
      "Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.",
    price: 18.0,
  };
  quantity = 1;
  stripePromise = loadStripe(environment.STRIPE_PUBLISHABLE_KEY);

  async checkout() {
    // Call your backend to create the Checkout session.
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await this.stripePromise;
    if(stripe)
    {
      const { error } = await stripe.redirectToCheckout({
        mode: "payment",
        lineItems: [{ price: this.priceId, quantity: this.quantity }],
        successUrl: `${window.location.href}/success`,
        cancelUrl: `${window.location.href}/failure`,
      });
      if (error) {
        alert("ah shit. something went wrong.\nBenny won't like this. You should text and let him know 225 200-6322\n+Tell him its an error code CO-428 or something lol.");
        console.log(error);
      }
    }
    else
    {
      alert("ah shit. something went wrong.\nBenny won't like this. You should text and let him know 225 200-6322\n+Tell him its an error code CO-288 or something lol.");
    }

    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.

  }

}