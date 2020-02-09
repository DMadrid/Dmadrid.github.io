import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/app/services/github.service';

@Component({
    selector: 'project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css'],
    providers: [ GitHubService ]
})
export class ProjectListComponent implements OnInit {
    loading = true;
    repos: any[];
    constructor(private readonly _gitHub: GitHubService) {}

    ngOnInit(): void {
        this._gitHub.getRepos$().subscribe((repos: any[]) => {
            this.loading = false;
            this.repos = repos;
        })
    }
}
