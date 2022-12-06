import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftCardLayoutComponent } from './gift-card-layout.component';

describe('GiftCardLayoutComponent', () => {
  let component: GiftCardLayoutComponent;
  let fixture: ComponentFixture<GiftCardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiftCardLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftCardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
