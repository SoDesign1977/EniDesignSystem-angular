import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniBreadcrumbComponent } from './eni-breadcrumb.component';

describe('EniBreadcrumbComponent', () => {
  let component: EniBreadcrumbComponent;
  let fixture: ComponentFixture<EniBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniBreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
