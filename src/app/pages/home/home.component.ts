import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    const sky = window.document.getElementById('sky');

    window.addEventListener('scroll', function(){
      let value = window.scrollY;
      sky.style.top = value * .5 + 'px';
    });
  }

  wristbandsClicked(){
    this.router.navigate(['cart']);
  }

}
