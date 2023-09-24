import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() imageString: string;
  @Input() title: string;
  @Input() description: string;

  @Input() navToSelector: string;
  gallery_dir = "../../../assets/photogallery/photos/";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.imageString = this.gallery_dir + this.imageString;
  }

  readClicked(){
    console.log(this.navToSelector);
    this.router.navigate([this.navToSelector]);
  }

}
