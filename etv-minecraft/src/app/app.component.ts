import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public status: any;
  public loaded: boolean;

  constructor(
    private http: HttpClient
  ) {
    this.status = {};
    this.loaded = false;
  }

  title = 'etv-minecraft';

  ngOnInit () {
    this.http.get('https://api.minetools.eu/ping/etv.tudelft.nl/1723')
    .subscribe( (data: any) => {
      console.log(data);
      this.status = data;
      this.loaded = true;

    });
  }
}
