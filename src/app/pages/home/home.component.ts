import { Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log("Hey, email us. We could probably use some help updating the website for next year")
  }

  ngAfterViewInit(): void {
    // Access the video element after the view has been initialized
    const video = <HTMLVideoElement>document.getElementById('video');
    
    if (video) {
      // Check if the video element exists before attempting to play it
      document.addEventListener('touchstart', function () {
        video.play();
      });
      
      document.addEventListener('mousemove', function () {
        video.play();
      });
    }
  }

  ngOnDestroy(): void {    
  }

  wristbandsClicked(){
    this.router.navigate(['shop']);
  }
}