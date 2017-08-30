import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceStateComponent } from './resource-state.component';

describe('ResourceStateComponent', () => {
  let component: ResourceStateComponent;
  let fixture: ComponentFixture<ResourceStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
