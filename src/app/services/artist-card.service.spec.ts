import { TestBed } from '@angular/core/testing';

import { ArtistCardService } from './artist-card.service';

describe('ArtistCardService', () => {
  let service: ArtistCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
