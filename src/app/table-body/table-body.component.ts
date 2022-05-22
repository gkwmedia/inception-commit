import { HttpParamsOptions } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Commit } from '../interfaces/commits';

import { HttpClientService } from '../services/http-client.service';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['./table-body.component.css'],
})
export class TableBodyComponent implements OnInit {
  constructor(private http: HttpClientService) {}

  commits: Commit[] = [];

  ngOnInit(): void {
    this.http
      .getCommits(
        'https://api.github.com/repos/gkwmedia/inception-commit/commits'
      )
      .subscribe((data) => {
        this.commits = data;
        console.log(data);
      });
  }
}
