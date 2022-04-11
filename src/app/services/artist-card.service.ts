import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistCardService {

  private _cardIsActive: boolean = false;
  constructor() { }

  get cardIsActive() {
    return this._cardIsActive;
  }

  set cardIsActive(val: boolean) {
    this._cardIsActive = val;
  }
}
