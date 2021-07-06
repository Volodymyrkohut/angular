import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute, Router} from "@angular/router";

export interface IRoom  {
  id:number,name: string, img: string, description: string
}

export interface IHotel {
  id: number;
  name: string;
  description: string;
  img: string;
  rooms: Array<IRoom>;
}

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {
  hotel: IHotel = {
    name:'Lorem ipsum ',
    description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, magnam.',
    id: 1,
    img: 'https://pix10.agoda.net/hotelImages/479494/-1/6d3b7d1ffc04a16bbeb611b27b27dda0.jpg?s=1024x768',
    rooms: [
      {name:'Lorem ipsum ',id: 1, img: 'https://image.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, magnam.'},
      {name:'Lorem ipsum ',id: 2, img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/b3/81/f0/michell-hotel.jpg?w=900&h=-1&s=1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, magnam.'}
    ]
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }
}
