import { Component, Renderer2, OnInit, Inject, OnDestroy, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { iframeResizer } from 'iframe-resizer';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as DOMPurify from 'dompurify';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements AfterViewInit {
  
  constructor(private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document, private sanitizer: DomSanitizer ) {
      iframeResizer ({ log: true }, '#frame');



  }

  get processedDocument(): SafeHtml {
    if (this.document) {
        const sanitized = DOMPurify.sanitize(this.document, {FORBID_TAGS: ['script'], RETURN_DOM: true});
        
        /* Add script tag */
        const script1 = <HTMLScriptElement>document.createElement('script1');
        script1.src = '../../../assets/js/iframeResizer.contentWindow.js';
        sanitized.appendChild(script1);

        const storeId = 78062460;
        const script2 = this.document.createElement('script2');
        script2.setAttribute('type', 'text/javascript');
        script2.setAttribute('charset', 'utf-8');
        script2.setAttribute('data-cfasync', 'false');
        script2.setAttribute('id', 'testScript');
        script2.setAttribute('src', `https://app.ecwid.com/script.js?${storeId}&data_platform=code&data_date=2020-02-17`);
        sanitized.appendChild(script2);

        const ecwidBrowserScript = <HTMLScriptElement>this.document.createElement('script3');
        ecwidBrowserScript.setAttribute('type', 'text/javascript');
        ecwidBrowserScript.setAttribute('charset', 'utf-8');
        ecwidBrowserScript.setAttribute('id', "id=my-store-${storeId}");
        ecwidBrowserScript.text = `xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list");`;
        sanitized.appendChild(ecwidBrowserScript);
        /* Return result */
        return this.sanitizer.bypassSecurityTrustHtml(sanitized.outerHTML);
    }
    return null;
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
          iFrameID.height = "";
          iFrameID.height = iFrameID.contentWindow.document.documentElement.scrollHeight + "px";
    } 
    console.log(iFrameID.height);
    iFrameID.style.setProperty('height', iFrameID.height);
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