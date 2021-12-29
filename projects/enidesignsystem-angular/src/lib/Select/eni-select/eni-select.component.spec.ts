import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniSelectComponent } from './eni-select.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
describe('EniSelectComponent', () => {
  let component: EniSelectComponent;
  let fixture: ComponentFixture<EniSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniSelectComponent ],
      imports: [BrowserModule, CommonModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
