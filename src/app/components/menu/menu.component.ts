import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  constructor(private router: Router) { 
  }

  ngOnInit(): void {

  }

  goHome() {
    this.router.navigate(['home']);
  }

  goToInfo() {
    this.router.navigate(['info']);
  }

  goToLineup() {
    this.router.navigate(['lineup']);
  }

  goToDirections() {
    this.router.navigate(['directions']);

  }

  goToschedule() {
    this.router.navigate(['schedule']);
  }

  goToShop() {
    this.router.navigate(['shop']);
    // TODO: test if this actually works when live. there may be a more robust way to do this.
    // might want to do this for all of these "goTo" calls.
    if(this.router.url == '/shop')
      window.location.reload();
  }

  goToGallery() {
    this.router.navigate(['gallery']);
  }

}
