import { Component, OnInit } from '@angular/core';
import photos from '@assets/photogallery/photos.json'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images = [];
  gallery_dir = "../../../assets/photogallery/";
  constructor() { }

  ngOnInit(): void {
    for(let key in photos){
      this.images.push({
        path: this.gallery_dir + photos[key]
      });
    }
  }

}
