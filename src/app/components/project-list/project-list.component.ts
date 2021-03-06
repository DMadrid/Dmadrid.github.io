import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { GitHubService } from 'src/app/services/github.service';

@Component({
    selector: 'project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
    loading = true;
    default_user = "dmadrid";
    user_avatar = this._gitHub.GetAvatar$(this.default_user)
    repos: any[];

    constructor(private readonly _gitHub: GitHubService) {}

    ngOnInit(): void {
        this._gitHub.GetRepos$(this.default_user).subscribe((repos: any[]) => {
            sessionStorage.setItem("repositories", JSON.stringify(repos))
            this.loading = false;
            this.repos = repos;
        });
    }
}
