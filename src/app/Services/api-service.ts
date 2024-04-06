// **************************************************
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
// **************************************************


@Injectable({
    providedIn: 'root',
})

export class ApiService {

    public mainUrl: string = `https://sandbox.irkevaluation.ir`;

    constructor(private http: HttpClient) { }

    public Get(url: string): Observable<any> {

        let finalUrl = `${this.mainUrl}/${url}`;

        return this.http.get<any>(finalUrl).pipe();
    }

    public Post(url: string, body: any): Observable<any> {

        let finalUrl = `${this.mainUrl}/${url}`;

        return this.http.post(finalUrl, body);
    }

    public GetWithToken(url: string, token: string): Observable<any> {

        let finalUrl = `${this.mainUrl}/${url}`;

        const headers = { 'Authorization': `Bearer ${token}` };

        return this.http.get<any>(finalUrl, { headers }).pipe();
    }

    public PostWithToken(url: string, body: any, token: string): Observable<any> {

        let finalUrl = `${this.mainUrl}/${url}`;

        const headers = { 'Authorization': `Bearer ${token}` };

        return this.http.post(finalUrl, body, { headers });
    }
}