import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-avatar-img',
  templateUrl: './avatar-img.component.html',
  styleUrls: ['./avatar-img.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarImgComponent implements OnInit {
  @Input()
  SRC!: string;

  constructor() {}

  ngOnInit(): void {}
}
