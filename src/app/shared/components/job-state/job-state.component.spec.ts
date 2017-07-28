import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobStateComponent } from './job-state.component';

describe('JobStateComponent', () => {
  let component: JobStateComponent;
  let fixture: ComponentFixture<JobStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
