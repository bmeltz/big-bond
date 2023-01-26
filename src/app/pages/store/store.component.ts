import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shop',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})


export class StoreComponent implements AfterViewInit, OnDestroy {
  interval : any;

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
    
    let prevHeight = 0;
    let consecutiveCount = 0;
    let self = this;
    self.interval = setInterval(function() {
      var iFrameID = <HTMLIFrameElement>document.getElementById('frame');
      if(iFrameID) {
        let newheight = iFrameID.contentWindow.document.body.scrollHeight;
        iFrameID.style.height = newheight + "px";
        if (prevHeight === newheight) {
          consecutiveCount++;
        } else {
          consecutiveCount = 0;
        }
        prevHeight = newheight;

        // stop trying after 32 seconds 160*200 ms = 32 seconds.
        // this isn't guaranteed to be enough time for the ecwid store to load, but
        // it's probably more than enough for all situations.
        if (consecutiveCount >= 160) {
          clearInterval(self.interval);
        }
      }
    }, 200);
  }

  public ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
   }
  }
}