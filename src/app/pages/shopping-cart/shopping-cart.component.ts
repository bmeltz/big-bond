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
  public price: number = 80.0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public homeClicked() {
    this.router.navigate(['home']);
  }

}
