import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packing-list',
  templateUrl: './packing-list.component.html',
  styleUrls: ['./packing-list.component.css']
})
export class PackingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

}
