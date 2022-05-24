import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBtnComponent } from './code-btn.component';

describe('CodeBtnComponent', () => {
  let component: CodeBtnComponent;
  let fixture: ComponentFixture<CodeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
