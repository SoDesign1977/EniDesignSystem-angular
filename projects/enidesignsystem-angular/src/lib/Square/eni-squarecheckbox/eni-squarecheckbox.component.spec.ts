import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EniSquarecheckboxComponent } from './eni-squarecheckbox.component';
import { BrowserModule } from '@angular/platform-browser';

describe('EniSquarecheckboxComponent', () => {
  let component: EniSquarecheckboxComponent;
  let fixture: ComponentFixture<EniSquarecheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniSquarecheckboxComponent ],
      imports: [BrowserModule, CommonModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniSquarecheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
