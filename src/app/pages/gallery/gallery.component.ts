import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const dir = '../../../assets/photogallery/'


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  images = [];
  constructor(private http: HttpClient) { 
    // this.getMessages();
  }

  getImages() {
    let gallery_url = this.createCompleteRoute(environment.BASE_URL, 'gallery');
    console.log(gallery_url);
    this.http.get<any>(gallery_url).subscribe(function(next){
      console.log(next);
    });
  }

  private createCompleteRoute = (envAddress: string, route: string) => {
    return `${envAddress}/${route}`;
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
