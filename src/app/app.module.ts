import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
// primeNG
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash.component';
import { MainComponent } from './modules/main.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IntroComponent } from './components/intro/intro.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { TileComponent } from './components/tile/tile.component';

export const routes: Routes = [
	{
		path: '',
		component: SplashComponent,
		data: {animation: 'splash'}
	},
	{
		path: 'main',
		component: MainComponent,
		data: {animation: 'main'}
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
		BrowserModule,
		BrowserAnimationsModule,
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
		TileComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
