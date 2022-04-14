import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  public selectedName: string;
  public artistPicMap = {
    "Bastiansé": "../../../assets/artist_pics/bastianse.jpg",
    "Biagi": "../../../assets/artist_pics/biagi.jpg"
  }
  constructor(private router: Router) 
  {
  }

  ngOnInit(): void {

    const sky = window.document.getElementById('sky');

    window.addEventListener('scroll', function(){
      let value = window.scrollY;
      sky.style.top = value * .5 + 'px';
    });
  }

  ngOnDestroy(): void {    
  }

  wristbandsClicked(){
    this.router.navigate(['cart']);
  }

  public setArtistName(event: any) {
    this.selectedName = event.target.innerHTML;
  }
}
