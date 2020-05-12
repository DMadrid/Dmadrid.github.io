import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/app/services/github.service';

@Component({
    selector: 'project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
    loading = true;
    default_user = "dmadrid";
    repos: any[];
    constructor(private readonly _gitHub: GitHubService) {}

    ngOnInit(): void {
        this._gitHub.getRepos$(this.default_user).subscribe((repos: any[]) => {
            this.loading = false;
            this.repos = repos;
            console.log(repos)
        });
    }
}
