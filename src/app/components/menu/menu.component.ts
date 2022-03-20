import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['home']);
  }

  goToPackingList() {
    this.router.navigate(['packing-list']);
  }

  goToDirections() {
    this.router.navigate(['directions']);

  }

  goToLineup() {
    this.router.navigate(['lineup']);
  }

  goToCart() {
    this.router.navigate(['cart']);
  }

}
