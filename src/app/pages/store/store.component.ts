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
      if(this.document.getElementById('testScript')){
        this.document.getElementById("testScript").remove();
      }
      if(this.document.getElementById('my-store-78062460')){
        this.document.getElementById("my-store-78062460").remove();
      }

    }

  public ngAfterViewInit(): void {

    const storeId = 78062460;
    const script = this.renderer2.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'utf-8');
    script.setAttribute('data-cfasync', 'false');
    script.setAttribute('id', 'testScript');
    script.setAttribute('src', `https://app.ecwid.com/script.js?${storeId}&data_platform=code&data_date=2020-02-17`);
    script.onload = this.injectEcwidProductBrowser(storeId);
    console.log(script);
    this.renderer2.appendChild(this.document.body, script);
    
  }

  private injectEcwidProductBrowser(storeId) {
    return () => {
      const ecwidBrowserScript = document.createElement('script');
      ecwidBrowserScript.setAttribute('type', 'text/javascript');
      ecwidBrowserScript.setAttribute('charset', 'utf-8');
      ecwidBrowserScript.text = `xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-${storeId}");`;
      document.head.appendChild(ecwidBrowserScript);
    };
  }
}