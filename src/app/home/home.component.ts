import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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

}
