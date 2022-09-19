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
    this.http.get<any>(gallery_url).subscribe((next) => {
      for(let image of next){
        let path = gallery_url + '/' + image;
        this.images.push(path);
      }
    });
  }

  private createCompleteRoute = (envAddress: string, route: string) => {
    return `${envAddress}/${route}`;
  }

}
