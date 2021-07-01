import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {
  product_id: string;

  constructor(private actRoute: ActivatedRoute, private router: Router) {
    this.product_id = this.actRoute.snapshot.params.id

    this.actRoute.params.subscribe(routeParams => {

      // load some data;
      this.product_id = this.actRoute.snapshot.params.id

      console.log("routeParams", routeParams)
    });
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }
  // navigate() {
  //   this.router.navigate(['/hotel', this.product_id]),
  //     console.log('navigate', this.product_id)
  // }
}
