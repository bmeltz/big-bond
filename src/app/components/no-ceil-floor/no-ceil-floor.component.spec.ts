import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCeilFloorComponent } from './no-ceil-floor.component';

describe('NoCeilFloorComponent', () => {
  let component: NoCeilFloorComponent;
  let fixture: ComponentFixture<NoCeilFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCeilFloorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCeilFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
