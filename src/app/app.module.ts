import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash.component';
import { MainComponent } from './components/main/main.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IntroComponent } from './components/intro/intro.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { TileComponent } from './components/tile/tile.component';
import { ResumeComponent } from './components/resume.component';

export const routes: Routes = [
	{
		path: '',
		component: MainComponent
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		BrowserModule,
		FormsModule,
		CommonModule,
		HttpClientModule
	],
	declarations: [
		AppComponent,
		SplashComponent,
		MainComponent,
		NavBarComponent,
		IntroComponent,
		ProjectListComponent,
		TileComponent,
		ResumeComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
