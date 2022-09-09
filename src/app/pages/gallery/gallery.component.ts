import { Component, OnInit } from '@angular/core';
import photos from '@assets/photogallery/photos.json'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const dir = '../../../assets/photogallery/'


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  public messages = this.http.get<any[]>('http://localhost:4201');

  images = [];
  gallery_dir = "../../../assets/photogallery/";
  constructor(private http: HttpClient) { 
    // this.getMessages();
  }

  post() {
    this.http.post<any>("http://localhost:4201/users", {username: 'benny'}).subscribe(next=> 
    console.log(next));
  }
  // ngOnInit(): void {

  //   // for (const file of files) {
  //   //   console.log(file)
  //   // }
  //   for(let key in photos){
  //     console.log(key, photos[key]);
  //     this.images.push({
  //       path: this.gallery_dir + photos[key]
  //     });
  //   }
  // }

}
