import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// PrimeNG
import { TabMenuModule } from 'primeng-lts/tabmenu';
import { ButtonModule } from 'primeng-lts/button';
import { SplitButtonModule } from 'primeng-lts/splitbutton';
import { InputTextModule } from 'primeng-lts/inputtext';
import { ToolbarModule } from 'primeng-lts/toolbar';
import { CardModule } from 'primeng-lts/card';
import { ProgressSpinnerModule } from 'primeng-lts/progressspinner';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HomeComponent } from '../components/home/home.component';
import { ResumeComponent } from '../components/resume.component';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { MainComponent } from './main.component';

import { HttpClientModule } from '@angular/common/http';
import { ProjectListComponent } from '../components/project-list/project-list.component';


export const routes: Routes = [
	{
		path: '',
		component: MainComponent,
		children: [
			{
				path: 'home',
				component: HomeComponent
			},
			{
				path: 'resume',
				component: ResumeComponent
			},
			{
				path: 'projects',
				component: ProjectListComponent
			}
		]
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		PdfViewerModule,
		TabMenuModule,
		ButtonModule,
		FormsModule,
		CommonModule,
		ToolbarModule,
		HttpClientModule,
		SplitButtonModule,
		InputTextModule,
		CardModule,
		ProgressSpinnerModule
	],
	declarations: [
		HomeComponent,
		ResumeComponent,
		NavBarComponent,
		MainComponent,
		ProjectListComponent
	],
	bootstrap: []
})
export class MainModule { }
