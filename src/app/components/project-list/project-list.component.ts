import { Component, OnInit } from '@angular/core';
import { GitHubService } from 'src/app/services/github.service';

@Component({
    selector: 'project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
    repos: any[];
    constructor(private readonly _gitHub: GitHubService) {
        this._gitHub.getApiList$().subscribe(list => {
            console.log(list)
            this._gitHub.getRepos$().subscribe((repos: any[]) => {
                console.log(repos)
                this.repos = repos;
            })
        })
    }

    ngOnInit(): void { }


}
