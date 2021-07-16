import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  toggle: any = true;
  getFrom(model: boolean){
    this.toggle = model;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
