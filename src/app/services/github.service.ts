import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, mergeMap, map } from 'rxjs/operators'
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GitHubService {
    constructor(private readonly _http: HttpClient) {}

    /** Get avatar url */
    GetAvatar$(user: string): Observable<string> {
        const key = 'avatar_url';
        return this.getUser$(user).pipe(
            map(list => list[key] as string)
        )
    }

    /** Get repositories of user */
    GetRepos$(user: string): Observable<any> {
        const key = 'repos_url';
        return this.getUser$(user).pipe(
            switchMap(list => {
                const repos_url = list[key] as string;
                return this._http.get(repos_url);
            })
        )
    }

    /** Requests API list from GitHub */
    private getApiList$(): Observable<any> {
        const cachedList = sessionStorage.getItem('api_list')
        if (cachedList == null) {
            const url = 'https://api.github.com';
            return this._http.get(url).pipe(map(list => {
                const stringedList = JSON.stringify(list)
                sessionStorage.setItem('api_list', stringedList)
                return list
            }))
        }
        const parsedList = JSON.parse(cachedList)
        return of(parsedList)
    }

    /** Get request url */
    private getUrl$(key: string): Observable<string> {
        return this.getApiList$().pipe(
            map(list => list[key] as string)
        )
    }

    /** Get User api calls */
    private getUser$(user: string): Observable<any> {
        return this.getUrl$('user_url').pipe(mergeMap(url => {
            const final_url = this.setPathParam(url, 'user', user)
            return this._http.get(final_url);
        }))
    }

    /** Set path parameter in url */
    private setPathParam(url: string, key: string, val: string): string {
        return url.replace(`{${key}}`, val);
    }
}