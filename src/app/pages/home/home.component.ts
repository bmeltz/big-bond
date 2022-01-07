import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  selected = new FormControl(0);
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
