import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomItemComponent } from './hotel-room-item.component';

describe('HotelRoomItemComponent', () => {
  let component: HotelRoomItemComponent;
  let fixture: ComponentFixture<HotelRoomItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelRoomItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRoomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
