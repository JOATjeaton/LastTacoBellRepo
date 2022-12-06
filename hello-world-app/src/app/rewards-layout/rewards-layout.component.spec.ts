import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsLayoutComponent } from './rewards-layout.component';

describe('RewardsLayoutComponent', () => {
  let component: RewardsLayoutComponent;
  let fixture: ComponentFixture<RewardsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
