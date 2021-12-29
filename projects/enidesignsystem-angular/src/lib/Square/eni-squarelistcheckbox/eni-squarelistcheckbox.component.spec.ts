import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EniSquarelistcheckboxComponent } from './eni-squarelistcheckbox.component';
import { BrowserModule } from '@angular/platform-browser';

describe('EniSquarelistcheckboxComponent', () => {
  let component: EniSquarelistcheckboxComponent;
  let fixture: ComponentFixture<EniSquarelistcheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniSquarelistcheckboxComponent ],
      imports: [BrowserModule,CommonModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniSquarelistcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
