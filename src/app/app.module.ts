import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IntroComponent } from './components/intro/intro.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { TileComponent } from './components/tile/tile.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		CommonModule,
		HttpClientModule,
		PdfViewerModule
	],
	declarations: [
		AppComponent,
		SplashComponent,
		NavBarComponent,
		IntroComponent,
		ProjectListComponent,
		TileComponent,
		ResumeComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
