import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IRoom} from "../hotel-detail.component";

@Component({
  selector: 'app-hotel-room-item',
  templateUrl: './hotel-room-item.component.html',
  styleUrls: ['./hotel-room-item.component.scss']
})

export class HotelRoomItemComponent implements OnInit {
  @Output() onSelect: EventEmitter<number> = new EventEmitter<number>();
  @Input() room: IRoom = {name: '', description: '', id: 0, img: ''}
  @ViewChild('imageRef') imageRef: ElementRef | undefined
  isVisible: boolean = true;
  text: string = '';

  constructor() {

  }


  selectHotel(id: number) {
    this.onSelect.emit(id);

    console.log("imageRef", this.imageRef)
  }

  ngOnInit(): void {
    console.log("room", this.room)
  }

}
