import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnessSpaComponent } from './wellness-spa.component';

describe('WellnessSpaComponent', () => {
  let component: WellnessSpaComponent;
  let fixture: ComponentFixture<WellnessSpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellnessSpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WellnessSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
