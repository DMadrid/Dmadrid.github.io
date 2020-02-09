import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators'
@Injectable({
    providedIn: 'root',
})
export class GitHubService implements OnInit {
    user = "dmadrid";
    api_list_url = 'https://api.github.com';

    api_list: any;

    constructor(private readonly _http: HttpClient) {
        
    }

    ngOnInit(): void {
        this.getApiList$().subscribe(list => {
            this.api_list = list;
        });
    }

    /** Requests API list from GitHub */
    getApiList$() {
        return this._http.get(this.api_list_url)
    }

    getRepos$() {
        return this.getUser$().pipe(
            switchMap(list => {
                let repos_url = list['repos_url'] as string;
                return this._http.get(repos_url);
            })
        )
    }

    getUser$() {
        let user_url = this.api_list['user_url'] as string;
        user_url = user_url.replace('{user}', this.user);
        return this._http.get(user_url);
    }

    /** Avatar API request */
    getAvatar$() {
        return this.getUser$().pipe(
            switchMap(list => {
                let avatar_url = list['avatar_url'] as string;
                return this._http.get(avatar_url);
            })
        )
    }
}