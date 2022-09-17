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

  public images = [];
  constructor(private http: HttpClient) { 
    this.getImages();
  }

  getImages() {
    let gallery_url = this.createCompleteRoute(environment.BASE_URL, 'gallery');
    console.log(gallery_url);
    this.http.get<any>(gallery_url).subscribe((next) => {
      console.log(next);
      for(let image of next){
        let path = gallery_url + '/' + image;
        console.log(path);
        this.images.push(path);
      }
    });
    // let gallery_url = this.createCompleteRoute(environment.BASE_URL, 'gallery');
    // console.log(gallery_url);
    // this.images = this.http.get<any>(gallery_url);
    // console.log(this.images)
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
