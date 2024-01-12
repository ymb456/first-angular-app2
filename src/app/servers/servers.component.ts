import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /*  template: `<app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>`,*/
  templateUrl: 'servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent implements OnInit {
  allowAddServer: boolean = false;
  serverIsCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }
  ngOnInit(): void {}
  onServerCreated() {
    this.serverIsCreated = true;
  }
}
