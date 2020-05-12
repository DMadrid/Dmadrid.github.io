import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, mergeMap } from 'rxjs/operators'
import { Observable, of, merge } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class GitHubService {
    api_list: any;

    constructor(private readonly _http: HttpClient) {}

    /** Requests API list from GitHub */
    getApiList$(): Observable<any> {
        const url = 'https://api.github.com';
        return this._http.get(url)
    }

    getUrl$(key: string): Observable<any> {
        if (this.api_list !== undefined && this.api_list[key]) {
            return of(this.api_list[key]);
        } else {
            return this.getApiList$().pipe(mergeMap(list => {
                this.api_list = list;
                return of(list[key]);
            }))
        }
    }

    /** Set path parameter in url */
    setPathParam(url: string, key: string, val: string): string {
        return url.replace(`{${key}}`, val);
    }

    /** Get repositories of user */
    getRepos$(user: string): Observable<any> {
        const key = 'repos_url';
        return this.getUser$(user).pipe(
            switchMap(list => {
                let repos_url = list[key] as string;
                return this._http.get(repos_url);
            })
        )
    }

    getUser$(user: string): Observable<any> {
        return this.getUrl$('user_url').pipe(mergeMap(url => {
            const final_url = this.setPathParam(url, 'user', user)
            return this._http.get(final_url);
        }))
    }

    /** Avatar API request */
    getAvatar$(user: string): Observable<any> {
        const key = 'avatar_url';
        return this.getUser$(user).pipe(
            switchMap(list => {
                let avatar_url = list[key] as string;
                return this._http.get(avatar_url);
            })
        )
    }
}