import { Component, OnDestroy, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private artistCardStatus = false;
  constructor(private router: Router) {
    console.log('construct', this.artistCardStatus);
   }

  ngOnInit(): void {

    const sky = window.document.getElementById('sky');

    window.addEventListener('scroll', function(){
      let value = window.scrollY;
      sky.style.top = value * .8 + 'px';


    });
    var self = this;
    // document.querySelector("html").addEventListener("click", function(e){
    //   self.toggleCard(e)
    // })
    document.querySelector("html").addEventListener("click", function(e) {
      self.toggleCard(e);
    })
  }

  ngOnDestroy(): void {
    var self = this;
    document.querySelector("html").removeEventListener("click", function(e){
      self.toggleCard(e);
    })
  }

  toggleCard(e) {
    console.log('omg');
    if(e.target == document.querySelector(".artist-name")){
      document.querySelector(".slider").classList.toggle("close");
      this.artistCardStatus = !this.artistCardStatus;
    }
    else if(e.target != document.querySelector(".slider") && this.artistCardStatus){
      document.querySelector(".slider").classList.toggle("close");
      this.artistCardStatus = !this.artistCardStatus;
    }
  }

  wristbandsClicked(){
    this.router.navigate(['cart']);
  }

  public getCardStatus() {
    return this.artistCardStatus;
  }

  public setCardStatus(val: boolean) {
    this.artistCardStatus = val;
  }

}
