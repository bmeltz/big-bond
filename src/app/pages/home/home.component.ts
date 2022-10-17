import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  // set a default. just to silence errors.

  constructor(private router: Router) 
  {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {    
  }

  wristbandsClicked(){
    this.router.navigate(['shop']);
  }
}
