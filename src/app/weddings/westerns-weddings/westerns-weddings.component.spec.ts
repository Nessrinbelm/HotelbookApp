import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternsWeddingsComponent } from './westerns-weddings.component';

describe('WesternsWeddingsComponent', () => {
  let component: WesternsWeddingsComponent;
  let fixture: ComponentFixture<WesternsWeddingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WesternsWeddingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WesternsWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
