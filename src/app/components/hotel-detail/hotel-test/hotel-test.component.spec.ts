import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTestComponent } from './hotel-test.component';

describe('HotelTestComponent', () => {
  let component: HotelTestComponent;
  let fixture: ComponentFixture<HotelTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
