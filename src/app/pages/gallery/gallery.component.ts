import { Component, OnInit } from '@angular/core';
import photos from '@assets/photogallery/photos.json'
// const fs = require('fs')

const dir = '../../../assets/photogallery/'
// const files = fs.readdirSync(dir)


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
    // for (const file of files) {
    //   console.log(file)
    // }
    for(let key in photos){
      console.log(key, photos[key]);
      this.images.push({
        path: this.gallery_dir + photos[key]
      });
    }
  }

}
