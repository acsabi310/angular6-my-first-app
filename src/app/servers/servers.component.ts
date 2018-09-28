import { Component, OnInit } from '@angular/core';

@Component({
	//selector: '[app-servers]',	// attribute
	//selector: '.app-servers',	// class
	selector: 'app-servers',	// tag
	/* template: `
  		<app-server></app-server>
		  <app-server></app-server>`, */
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

	allowNewServer = false;
	serverCreationStatus = 'No server ceated yet';
	serverName = 'TestServer';
	serverCreated = false;
	servers: Array<string> = ['Test', 'Test 2']

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000)
	}

	ngOnInit() {
	}

	// best practice "on" prefix
	onCreateServer() {
		this.serverCreated = true;
		this.servers.push(this.serverName);
		this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
	}

	onUpdateServerName(event: any) {
		// console.log(event);
		this.serverName = (<HTMLInputElement>event.target).value;
	}

}
