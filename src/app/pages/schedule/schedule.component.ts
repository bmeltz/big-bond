import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class scheduleComponent implements OnInit {

  constructor() { }
  screenWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = event.target.innerWidth;
    console.log(this.screenWidth)
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

}
