import { Component, OnInit } from '@angular/core';
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
    const title = window.document.getElementById('title');

    window.addEventListener('scroll', function(){
      let value = window.scrollY;
      console.log(value);
      sky.style.top = value * .5 + 'px';
      // title.style.top = value * -.1 + 'px';
    });
  }

  wristbandsClicked(){
    this.router.navigate(['cart']);
  }

}
