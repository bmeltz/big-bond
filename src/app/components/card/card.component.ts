import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() imageString: string;
  @Input() title: string;
  @Input() description: string;

  gallery_dir = "../../../assets/photogallery/photos/";

  constructor() {
  }



  ngOnInit(): void {
    this.imageString = this.gallery_dir + this.imageString;
  }

}
