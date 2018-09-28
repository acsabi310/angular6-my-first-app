import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
	// components
	declarations: [
		AppComponent,
		ServerComponent,
		ServersComponent
	],
	// other modules
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	// az összes modul amit ismernie kell
	// az index.html-nek induláshoz
	bootstrap: [AppComponent]
})
export class AppModule { }
