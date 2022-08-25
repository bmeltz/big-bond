import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements AfterViewInit {
  constructor() {
  }

  // this is such a hacky solution to get a good iframe height after the ecwid store has fully loaded.
  // I've spent days reading every stack overflow and obscure blog post about how to do this and things i've found
  // while promising do not work for my exact situation so unfortunately here we are. maybe someday a 
  // legit solution will occur to me, but for now i'm gonna settle and move on to other dumpster fires.
  public ngAfterViewInit(): void {
    // let stopChecking: (current: string, possible_new: string) => boolean = function(current: string, possible_new: string): boolean{
    //   // definitely not done if any of these are true
    //   if(current == '' || possible_new == '' || current.slice(-2) != 'px' || possible_new.slice(-2) != 'px') {
    //     return false;
    //   }
    //   return +(possible_new.slice(0, -2)) > +(current.slice(0, -2));
    // };
    const interval = setInterval(function() {
      var iFrameID = <HTMLIFrameElement>document.getElementById('frame');
      if(iFrameID) {

        // here you can make the height, I delete it first, then I make it again
        // iFrameID.height = "";
        let current = iFrameID.style.height;
        let possible_new = iFrameID.contentWindow.document.body.scrollHeight + "px";
        console.log(current, possible_new);
        iFrameID.style.height = possible_new;

        //TODO: get this to work. need to figure out a good way to stop checking
        // if(stopChecking(current, possible_new)){
          //clearInterval()
        // }
            
      } 
    }, 1000);
    
  }
}