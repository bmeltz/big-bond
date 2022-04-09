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
    // document.querySelector("html").addEventListener("click", function(e){
    //   self.toggleCard(e)
    // })
    var self = this;
    document.querySelector("html").addEventListener("click", function(e) {
      toggleCard(e, self);
    })
  }

  ngOnDestroy(): void {
    // this doesn't have the desired effect. :(
    document.querySelector("html").removeEventListener("click", function(e) {
      toggleCard(e, self);
    })
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
function toggleCard(e, obj: any) {
  console.log('omg');
  if(e.target == document.querySelector(".artist-name")){
    document.querySelector(".slider").classList.toggle("close");
    obj.artistCardStatus = !obj.artistCardStatus;
  }
  else if(e.target != document.querySelector(".slider") && obj.artistCardStatus){
    document.querySelector(".slider").classList.toggle("close");
    obj.artistCardStatus = !obj.artistCardStatus;
  }
}
