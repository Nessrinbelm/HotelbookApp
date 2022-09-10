import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrationbookingComponent } from './celebrationbooking.component';

describe('CelebrationbookingComponent', () => {
  let component: CelebrationbookingComponent;
  let fixture: ComponentFixture<CelebrationbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebrationbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelebrationbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
