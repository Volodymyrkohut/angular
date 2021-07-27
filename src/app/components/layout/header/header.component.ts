import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {authDataSelector, isAuthSelector} from "../../../store/auth-store/auth.selectors";
import {AuthService} from "../../../store/auth-store/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  data$: Observable<any> = this.store$.pipe(select(authDataSelector))
  isAuth$: Observable<any> = this.store$.pipe(select(isAuthSelector))

  @Input() toggle: boolean = true;
  @Output() handleClick: any = new EventEmitter<boolean>()

  constructor(public auth: AuthService, private store$: Store) {
    // console.log("store::::", this.data$.pipe(map((data) => data)).subscribe());
  }

  change(model: boolean) {
    this.toggle = model
    this.handleClick.emit(model);
  }

  ngOnInit(): void {

  }
}
