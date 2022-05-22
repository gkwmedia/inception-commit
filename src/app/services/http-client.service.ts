import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commit } from '../interfaces/commits';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private http: HttpClient) {}

  getCommits(url: string): Observable<Commit[]> {
    return this.http.get<Commit[]>(url);
  }
}
