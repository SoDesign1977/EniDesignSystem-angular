import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EniBreadcrumbComponent } from './eni-breadcrumb.component';
import { BrowserModule } from '@angular/platform-browser';

describe('EniBreadcrumbComponent', () => {
  let component: EniBreadcrumbComponent;
  let fixture: ComponentFixture<EniBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniBreadcrumbComponent ],
      imports: [BrowserModule,CommonModule,FormsModule],
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
