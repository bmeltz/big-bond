import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const fs = require('fs')
    // const path = require('path')

    // const dir = '../../../../assets/photogallery';
    // const files = fs.readdirSync(dir);

    // for (const file of files) {
    //   const stat = fs.lstatSync(path.join(dir, file))
    //   console.log(stat)
    // }
  }

}
