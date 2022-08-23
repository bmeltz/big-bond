import { Component, Renderer2, OnInit, Inject, OnDestroy, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements AfterViewInit {
  
  constructor(private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document) {

  }

  public ngAfterViewInit(): void {

    // const storeId = 78062460;
    // const script = this.renderer2.createElement('script');
    // script.setAttribute('type', 'text/javascript');
    // script.setAttribute('charset', 'utf-8');
    // script.setAttribute('data-cfasync', 'false');
    // script.setAttribute('id', 'testScript');
    // script.setAttribute('src', `https://app.ecwid.com/script.js?${storeId}&data_platform=code&data_date=2020-02-17`);
    // script.onload = this.injectEcwidProductBrowser(storeId);
    // this.renderer2.appendChild(document.body, script);
    
  }

  public iframeLoaded() {
    var iFrameID = <HTMLIFrameElement>document.getElementById('frame');
    if(iFrameID) {
          // here you can make the height, I delete it first, then I make it again
          // iFrameID.height = "";
          iFrameID.style.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
    } 
    console.log('what dis', iFrameID.style.height);
    // iFrameID.style.setProperty('height', iFrameID.height);
}

  private injectEcwidProductBrowser(storeId) {
    return () => {
      const ecwidBrowserScript = this.renderer2.createElement('script');
      ecwidBrowserScript.setAttribute('type', 'text/javascript');
      ecwidBrowserScript.setAttribute('charset', 'utf-8');
      ecwidBrowserScript.setAttribute('id', "id=my-store-${storeId}");
      ecwidBrowserScript.text = `xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list");`;
      this.renderer2.appendChild(document.body, ecwidBrowserScript);
    };
  }


}