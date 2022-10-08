import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shop',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements AfterViewInit, OnDestroy {
  constructor(public router: Router) {

  }

  goToStorePolicies() {
    this.router.navigate(['shop-policies'])
  }

  // this is such a hacky solution to get a good iframe height after the ecwid store has fully loaded.
  // I've spent days reading every stack overflow and obscure blog post about how to do this but things i've found
  // do not work for my exact situation so unfortunately here we are. maybe someday a 
  // legit solution will occur to me, but for now i'm gonna settle and move on to other dumpster fires.
  public ngAfterViewInit(): void {

    const interval = setInterval(function() {
      var iFrameID = <HTMLIFrameElement>document.getElementById('frame');
      if(iFrameID) {
        let newheight = iFrameID.contentWindow.document.body.scrollHeight + "px";
        iFrameID.style.height = newheight;
        //TODO: figure out a good stop condition
            
      } 
    }, 200);    
  }

  public ngOnDestroy(): void {
    clearInterval();
  }
}