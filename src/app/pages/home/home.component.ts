import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  // set a default. just to silence errors.
  public selectedName: string = "Bastiansé";
  private basePath: string = "../../../assets/artist_pics/";
  // this is the easiest least-awful solution I thought of. I know it's still not great.
  // hardcoding things everywhere is a recipe for unmaintanable code, but this won't matter in 2 weeks (3/29/22)
  public artistInfoMap = {
    "Bastiansé": {
      pic: this.basePath + "bastianse.jpg",
      soundCloud: "https://soundcloud.com/sebastian_ponce",
      insta: "https://www.instagram.com/bastiansedj/",
      spotify: "https://open.spotify.com/artist/06Iy9agsDRD9AWcdomNmJE?si=RI28ydBXQh6pNmDhOTpCQg"
    },
    "Biagi": {
      pic: this.basePath + "biagi.jpg",
      soundCloud: "https://soundcloud.com/biagisounds",
      insta: "https://www.instagram.com/biagidj/",
      spotify: ""
    },
    "CJ.": {
      pic: this.basePath + "cj.jpg",
      soundCloud: "https://soundcloud.com/cj-music-rips",
      insta: "https://www.instagram.com/cj.music__/",
      spotify: ""
    },
    "Cut & Sew": {
      pic: this.basePath + "cut_sew.jpg",
      soundCloud: "https://soundcloud.com/cutnsewmusic",
      insta: "https://www.instagram.com/cutnsewmusic_/",
      spotify: ""
    },
    "Fomentum": {
      pic: this.basePath + "fomentum.jpg",
      soundCloud: "https://soundcloud.com/fomentummusic",
      insta: "https://www.instagram.com/fomentummusic/",
      spotify: "https://open.spotify.com/artist/4ejN0456vxPAmvaJ5bImxJ?si=BG7ewfjzTVOYRjMeLT5ASw"
    },
    "James Lang": {
      pic: this.basePath + "james_lang.jpg",
      soundCloud: "",
      insta: "https://www.instagram.com/_jameslang/",
      spotify: ""
    },
    "Jorco": {
      pic: this.basePath + "jorco.jpg",
      soundCloud: "https://soundcloud.com/jordan-coff",
      insta: "https://www.instagram.com/_jorco_/",
      spotify: ""
    },
    "Manic Muse": {
      pic: this.basePath + "manic_muse.jpg",
      soundCloud: "https://soundcloud.com/manicmuseofficial",
      insta: "https://www.instagram.com/manic.muse/",
      spotify: ""
    },
    "TiDDY": {
      pic: this.basePath + "tiddy.jpg",
      soundCloud: "https://soundcloud.com/tiddytunes",
      insta: "https://www.instagram.com/tiddy__/",
      spotify: ""
    },
    "Trunk Space": {
      pic: this.basePath + "trunk_space.jpg",
      soundCloud: "https://soundcloud.com/trunkspacebeats",
      insta: "https://www.instagram.com/trunkspacebeats/",
      spotify: "https://open.spotify.com/artist/0E9PXzwyBnIwMOE44WBxxu?si=Sf1pEUNHSnW-B7dq3v2VXg"
    },
    "weix": {
      pic: this.basePath + "weix.jpg",
      soundCloud: "https://soundcloud.com/weix-music",
      insta: "https://www.instagram.com/weix.jpg/",
      spotify: ""
    }
  }
  constructor(private router: Router) 
  {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {    
  }

  wristbandsClicked(){
    this.router.navigate(['cart']);
  }

  public setArtistName(event: any) {
    this.selectedName = event.target.innerText;
  }
}
