import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtistCardService } from 'src/app/services/artist-card.service';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit, OnDestroy {
  
  @Input() name: string;
  @Input() image: string;
  @Input() insta: string;
  @Input() soundcloud: string;
  @Input() spotify: string;

  private toggleCard;
  constructor(private router: Router,
    private cardService: ArtistCardService) 
  {
    window.addEventListener('scroll', function(){
      if(cardService.cardIsActive){
        document.getElementById("artist-card").classList.toggle("close");
        cardService.cardIsActive = false;
      }
    });

    this.toggleCard = function toggleCard(e) {
      console.log(this.insta, 'spotify:', this.spotify);

      if(e.target.classList.contains("dt-artist-name") || e.target.classList.contains("mobile-artist-name")){
        document.getElementById("artist-card").classList.toggle("close");
        cardService.cardIsActive = true;
      }
      else if(e.target != document.getElementById("artist-card") && !document.getElementById("artist-card").contains(e.target) && cardService.cardIsActive){
        document.getElementById("artist-card").classList.toggle("close");
        cardService.cardIsActive = false;
      }
    }
  }

  ngOnInit(): void {    
    document.querySelector("html").addEventListener("click", this.toggleCard);
  }

  ngOnDestroy(): void {    
    // remove the event listener and toggle the card one more time if the card is active (i.e. hide it)
    document.querySelector("html").removeEventListener("click", this.toggleCard);
    if(this.cardService.cardIsActive){
      document.getElementById("artist-card").classList.toggle("close");
      this.cardService.cardIsActive = false;
    }
  }

  wristbandsClicked(){
    this.router.navigate(['cart']);
  }

}

