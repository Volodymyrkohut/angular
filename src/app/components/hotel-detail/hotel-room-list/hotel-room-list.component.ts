import {Component, Input, OnInit} from '@angular/core';
import {IRoom} from "../hotel-detail.component";

@Component({
  selector: 'app-hotel-room-list',
  templateUrl: './hotel-room-list.component.html',
  styleUrls: ['./hotel-room-list.component.scss']
})
export class HotelRoomListComponent implements OnInit {

  @Input() rooms: Array<IRoom> = []

  constructor() {
  }

  selectRoom(data: any){

    console.log("1", data)
  }
  ngOnInit(): void {

  }
}
