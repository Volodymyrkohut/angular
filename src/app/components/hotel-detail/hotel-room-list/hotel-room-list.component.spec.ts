import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomListComponent } from './hotel-room-list.component';

describe('HotelRoomListComponent', () => {
  let component: HotelRoomListComponent;
  let fixture: ComponentFixture<HotelRoomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelRoomListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
