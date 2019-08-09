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
  public players: any;

  constructor(
    private http: HttpClient
  ) {
    this.status = {};
    this.loaded = false;
  }

  title = 'etv-minecraft';

  ngOnInit () {
    this.updateData();
    setInterval(this.updateData, 3000);
  }

  updateData = (): void => {
    this.http.get('https://api.minetools.eu/ping/etv.tudelft.nl/1723')
    .subscribe( (data: any) => {
      this.status = data;
      this.loaded = true;
    });

    this.http.get('https://minecraft-server.etv.tudelft.nl')
    .subscribe( (data: any) => {
      this.players = data;
    });
  }
}
