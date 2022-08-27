import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() panelstyle: Object;
  
  constructor(private router: Router) { 
  }

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

  goToschedule() {
    this.router.navigate(['schedule']);
  }

  goToStore() {
    this.router.navigate(['store']);
    // TODO: test if this actually works when live
    if(this.router.url == '/store')
      window.location.reload();
  }

  goToGallery() {
    this.router.navigate(['gallery']);
  }

}
