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
    console.log("Hey, email us. We could probably use some help updating the website for next year")
    
    // hacky solution to make using in low power mode bearable.
    // touching or clicking will begin playing the video.
    document.addEventListener('touchstart', function () {
      const video = <HTMLVideoElement>document.getElementById('video');
      video.play();

    });
    document.addEventListener('mousemove', function () {
      const video = <HTMLVideoElement>document.getElementById('video');
      video.play();
    });
  
  }

  ngOnDestroy(): void {    
  }

  wristbandsClicked(){
    this.router.navigate(['shop']);
  }
}
