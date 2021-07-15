import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular';
  data = {};
  constructor(private http: HttpClient) {
  }

  ngOnInit(){
    this.http.get('https://api.dev24.bukovel.net/b24/desktop/hotels').subscribe((response)=>{
      console.log("response",response);
      this.data = response
    })
    console.log("heree")

  }
}
