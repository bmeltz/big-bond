import { Component, Input, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() quantity: number = 1;

  priceId = environment.PRICE;
  stripePromise = loadStripe(environment.STRIPE_TEST_PUBLISHABLE_KEY);

  async checkout() {
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
      successUrl: `${window.location.href}/success`,
      cancelUrl: `${window.location.href}/`,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    if (error) {
      console.log(error);
    }

  }
}
