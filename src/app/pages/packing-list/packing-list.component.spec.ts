import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingListComponent } from './packing-list.component';

describe('PackingListComponent', () => {
  let component: PackingListComponent;
  let fixture: ComponentFixture<PackingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
