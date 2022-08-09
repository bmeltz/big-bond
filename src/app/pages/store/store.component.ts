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
    let prod: Product = {
      name: product.name ,
      price: product.properties.price,
      priceId: this.getPriceId(product),
      quantity: +(<HTMLInputElement>document.getElementById(product.name)).value,
      productId: this.getProductId(product),
      image: product.properties.image,
      allowed_quantities: product.properties.qty
    }
    this._cart.putInCart(prod);
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

}

