import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() toggle: boolean = true;
  @Output() handleClick: any = new EventEmitter<boolean>()

  constructor(public auth: AuthService) { }


  change(model: boolean) {
    this.toggle = model
    this.handleClick.emit(model);
  }


  ngOnInit(): void {

  }

}
