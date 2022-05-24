import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-code-btn',
  templateUrl: './code-btn.component.html',
  styleUrls: ['./code-btn.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeBtnComponent implements OnInit {
  @Input() SHA!: string;

  constructor() {}

  ngOnInit(): void {}
}
