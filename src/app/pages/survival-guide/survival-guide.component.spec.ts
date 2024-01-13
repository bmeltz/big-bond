import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivalGuideComponent } from './survival-guide.component';

describe('SurvivalGuideComponent', () => {
  let component: SurvivalGuideComponent;
  let fixture: ComponentFixture<SurvivalGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurvivalGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivalGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
