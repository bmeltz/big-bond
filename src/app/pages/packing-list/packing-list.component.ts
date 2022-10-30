import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packing-list',
  templateUrl: './packing-list.component.html',
  styleUrls: ['./packing-list.component.css']
})
export class PackingListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetailedList() {
    this.router.navigate(['detailed']);
  }

}
