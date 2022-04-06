import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'terms-and-conditions',
  templateUrl: './tandc.component.html',
  styleUrls: ['./tandc.component.css']
})
export class TandcComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public backToCart() {
    this.router.navigate(['cart']);
  }

}
