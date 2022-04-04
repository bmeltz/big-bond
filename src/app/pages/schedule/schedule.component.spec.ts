import { ComponentFixture, TestBed } from '@angular/core/testing';

import { scheduleComponent } from './schedule.component';

describe('scheduleComponent', () => {
  let component: scheduleComponent;
  let fixture: ComponentFixture<scheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ scheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(scheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
