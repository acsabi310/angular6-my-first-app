import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule
	],
	providers: [],
	// az összes modul amit ismernie kell
	// az index.html-nek induláshoz
	bootstrap: [AppComponent]
})
export class AppModule { }
