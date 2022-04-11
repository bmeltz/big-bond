import { Component, OnDestroy, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ArtistCardService } from 'src/app/services/artist-card.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private comingFromDestroy = false;
  private toggleCard;
  constructor(private router: Router,
    private cardService: ArtistCardService) 
  {
  }

  ngOnInit(): void {

    const sky = window.document.getElementById('sky');

    window.addEventListener('scroll', function(){
      let value = window.scrollY;
      sky.style.top = value * .8 + 'px';
    });
    
    // document.querySelector("html").addEventListener("click", this.toggleCard);
  }

  ngOnDestroy(): void {    
    // remove the event listener and toggle the card one more time if the card is active (i.e. hide it)
    // document.querySelector("html").removeEventListener("click", this.toggleCard);
    // if(this.cardService.cardIsActive){
    //   document.getElementById("artist-card").classList.toggle("close");
    //   this.cardService.cardIsActive = false;
    // }
  }

  wristbandsClicked(){
    this.router.navigate(['cart']);
  }

}
