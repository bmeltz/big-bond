import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
import products from '@assets/products.json';
import { CartService, Product } from 'src/app/services/cart.service';

@Component({
  selector: 'store',
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
  bandPriceId: string = environment.PRICE_BAND;
  publishable_key: string = environment.STRIPE_PUBLISHABLE_KEY;
  stripePromise: any;
  test_mode = true;
  hoodieSize: string;

  public products = products;
 
  constructor(private router: Router, private _cart: CartService) { }

  ngOnInit(): void {
    if(this.test_mode) {
      this.bandPriceId = environment.TEST_PRICE_BAND;
      this.publishable_key = environment.STRIPE_TEST_PUBLISHABLE_KEY;
    }
  }

  // public onCheckboxChange() {
  //   console.log(this.checkboxStatus);
  //   this.checkboxStatus = !this.checkboxStatus;
  // }

  hasProp(obj, prop) {
    return obj.hasOwnProperty(prop);
  }

  addToCart(product) {
    console.log(+(<HTMLInputElement>document.getElementById("qty")).value);
    let prod: Product = {
      name: product.name ,
      price: product.properties.price,
      priceId: this.getPriceId(product),
      quantity: +(<HTMLInputElement>document.getElementById("qty")).value,
      productId: this.getProductId(product)
    }
    this._cart.putInCart(prod);
    console.log("-------------------")
    this._cart.logCartContents();
  }

  private getPriceId(product) {
    let price_id: string;
    if(product.properties.hasOwnProperty('sizes')){
      let size = (<HTMLInputElement>document.getElementById("size")).value;
      price_id = product.properties.stripeIds[size].testStripePriceId;
    }
    else{
      price_id = product.properties.stripeIds.testStripePriceId;
    }
    return price_id;
  }

  private getProductId(product) {
    let prod_id: string;
    if(product.properties.hasOwnProperty('sizes')){
      let size = (<HTMLInputElement>document.getElementById("size")).value;
      prod_id = product.properties.stripeIds[size].testStripeProdId;
    }
    else{
      prod_id = product.properties.stripeIds.testStripeProdId;
    }
    return prod_id;
  }

  viewCart() {
    this.router.navigate(['cart']);
  }

  async checkout() {
    this.stripePromise = loadStripe(this.publishable_key);

    // this call is probably unnecessary, but can't hurt.
    // this.updateSessionQuantity();
    // Call your backend to create the Checkout session.
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await this.stripePromise;
    const { error } = await stripe.redirectToCheckout({
      mode: 'payment',
      lineItems: [
        { 
          price: this.bandPriceId,
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

