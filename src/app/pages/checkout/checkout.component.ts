import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  paymentHandler: any = null;
  //pk_live_51JHiV9L2xwG7RCwgRoJ4v2MN1N81ObxBrKQImAlRZJBzFmDaFVn4hzFfZmoipf9qmaf2CdZBKUILmPO666rvOCQO00d42DXpwx
  constructor() { }

  ngOnInit(): void {
    this.invokeStripe();
  }

  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_live_51JHiV9L2xwG7RCwgRoJ4v2MN1N81ObxBrKQImAlRZJBzFmDaFVn4hzFfZmoipf9qmaf2CdZBKUILmPO666rvOCQO00d42DXpwx',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken)
        alert('Stripe token generated!');
      }
    });
  
    paymentHandler.open({
      name: 'PAYMENT',
      description: 'description',
      amount: amount * 100 // DO NOT REMOVE THIS 100!
    });
  }
  
  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_live_51JHiV9L2xwG7RCwgRoJ4v2MN1N81ObxBrKQImAlRZJBzFmDaFVn4hzFfZmoipf9qmaf2CdZBKUILmPO666rvOCQO00d42DXpwx',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
        
      window.document.body.appendChild(script);
    }
  }
}
