import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../services/http-client.service';
import { Commit } from '../interfaces/commits';

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.css'],
})
export class CommitListComponent implements OnInit {
  constructor(private http: HttpClientService) {}

  commits: Commit[] = [];

  ngOnInit(): void {
    this.http
      .getCommits(
        'https://api.github.com/repos/gkwmedia/inception-commit/commits'
      )
      .subscribe((data) => {
        this.commits = data;
      });
  }
}
