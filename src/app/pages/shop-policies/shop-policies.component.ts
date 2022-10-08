import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shop-policies',
  templateUrl: './shop-policies.component.html',
  styleUrls: ['./shop-policies.component.scss']
})
export class ShopPoliciesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToShop() {
    this.router.navigate(['/shop']);
  }

}
