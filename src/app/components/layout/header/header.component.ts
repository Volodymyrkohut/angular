import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() toggle: boolean = true;
  @Output() handleClick: any = new EventEmitter<boolean>()

  change(model: boolean) {
    this.toggle = model
    this.handleClick.emit(model);
  }

  constructor() { }

  ngOnInit(): void {

  }

}
