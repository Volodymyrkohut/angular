import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-hotel-test',
  templateUrl: './hotel-test.component.html',
  styleUrls: ['./hotel-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default, // default
  encapsulation: ViewEncapsulation.None, // global style for component
})
export class HotelTestComponent implements OnInit {

  product_id: string;
  description: string;
  items: Array<{name: string}>;
  dateShow: any = Date.now();

  constructor(private actRoute: ActivatedRoute, private router: Router) {
    this.product_id = this.actRoute.snapshot.params.id

    this.description = 'description';
    this.items = [{name:'vue'}, {name:'angular'}, {name: 'react'}, {name: 'ember'}, {name: 'node'}]


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
