import { Component, OnInit } from '@angular/core';

import { loadStripe } from '@stripe/stripe-js';
import { environment } from 'src/environments/environment';
// import products from '@assets/products.json';
import { CartService, Product } from 'src/app/services/cart.service';
import products from '@assets/products.json';

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

  public prodList = this._cart.productIdsInCart;

 
  constructor(public _cart: CartService) { }

  ngOnInit(): void {
    console.log(this._cart.itemsInCart);
    if(this.test_mode) {
      this.publishable_key = environment.STRIPE_TEST_PUBLISHABLE_KEY;
    }
  }

  // public onCheckboxChange() {
  //   console.log(this.checkboxStatus);
  //   this.checkboxStatus = !this.checkboxStatus;
  // }

  public test() {
    for(let product in this._cart.itemsInCart){
      console.log(this._cart.itemsInCart[product])

    }
    // console.log('uh wtf', this._cart.itemsInCart["prod_M7EqcfQGmXJ8pn"].image)
    // this._cart.clearCart();
  }

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


  // NOTE/TODO:
  // when the user clicks 'back' in checkout, the line items/cart service is cleared.
  // so the user would have to start all over filling their cart.
  // would be cool to not require them to do this.
  // ghetto solution idea: store the contents of the cart in session memory or whatever
  // and then rebuild the cart contents if back is pressed.. maybe?
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

