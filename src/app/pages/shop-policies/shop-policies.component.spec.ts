import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPoliciesComponent } from './shop-policies.component';

describe('ShopPoliciesComponent', () => {
  let component: ShopPoliciesComponent;
  let fixture: ComponentFixture<ShopPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
