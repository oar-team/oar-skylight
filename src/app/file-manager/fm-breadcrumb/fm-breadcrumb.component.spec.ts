import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmBreadcrumbComponent } from './fm-breadcrumb.component';

describe('FmBreadcrumbComponent', () => {
  let component: FmBreadcrumbComponent;
  let fixture: ComponentFixture<FmBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
