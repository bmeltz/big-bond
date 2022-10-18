import { Component, OnInit } from '@angular/core';
import photos from '@assets/photogallery/photos.json'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images = [];
  gallery_dir = "../../../assets/photogallery/photos/";
  constructor() { }

  // TODO: find out the pros/cons of doing this with a backend instead.
  ngOnInit(): void {
    for(let img in photos["file_list"]){
      this.images.push({
        path: this.gallery_dir + photos["file_list"][img]
      });
      console.log(this.gallery_dir+ photos["file_list"][img])
    }
  }
}
