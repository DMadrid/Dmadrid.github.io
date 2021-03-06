import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, mergeMap, map } from 'rxjs/operators'
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GitHubService {
    constructor(private readonly _http: HttpClient) {}

    /** Requests API list from GitHub */
    getApiList$(): Observable<any> {
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
    getUrl$(key: string): Observable<any> {
        return this.getApiList$().pipe(mergeMap(list => {
            return of(list[key]);
        }))
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
                const repos_url = list[key] as string;
                return this._http.get(repos_url);
            })
        )
    }

    /** Get User api calls */
    getUser$(user: string): Observable<any> {
        return this.getUrl$('user_url').pipe(mergeMap(url => {
            const final_url = this.setPathParam(url, 'user', user)
            return this._http.get(final_url);
        }))
    }

    /** Get avatar url */
    getAvatar$(user: string): Observable<string> {
        const key = 'avatar_url';
        return this.getUser$(user).pipe(
            map(list => list[key] as string)
        )
    }
}