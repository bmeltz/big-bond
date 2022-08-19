import { Component, Renderer2, OnInit, Inject, OnDestroy, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements AfterViewInit {
  
  public styleobj = {"right": "-20px !important;", "background-color": "red !important;"};
  constructor(private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document) {
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
    this.renderer2.appendChild(document.body, script);
    
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