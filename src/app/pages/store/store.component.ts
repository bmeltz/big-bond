import { Component, Renderer2, OnInit, Inject, OnDestroy, AfterViewInit, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements AfterViewInit {
  
  screenHeight: number;
  screenWidth: number;
  constructor(private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document) {
      this.getScreenSize();
  }


  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        var iFrameID = <HTMLIFrameElement>document.getElementById('frame');
        if(iFrameID) {
              // here you can make the height, I delete it first, then I make it again
              // iFrameID.height = "";
              iFrameID.style.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
    
        }
  }

  public ngAfterViewInit(): void {
    
  }

  private delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  public async iframeLoaded() {
    // this is suuuper hacky. there's a race condition with the iframe itself loading vs the contents of the
    // iframe loading. I need a non hacky solution for this.
    // it feels slow (4 seconds slow), but mainly i cant guarantee that the contents of the store won't take
    // longer than 4 seconds to load, and in that case the only way to get the full store to show as its currently
    // coded is to resize the window, which isn't even possible on mobile.
    await this.delay(4000);
    var iFrameID = <HTMLIFrameElement>document.getElementById('frame');
    if(iFrameID) {
          // here you can make the height, I delete it first, then I make it again
          // iFrameID.height = "";
          iFrameID.style.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
    } 
    console.log('what dis', iFrameID.style.height);
  }

}