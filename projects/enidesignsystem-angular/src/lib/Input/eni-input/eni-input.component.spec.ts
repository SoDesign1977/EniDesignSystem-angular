import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EniInputComponent } from './eni-input.component';
import { BrowserModule } from '@angular/platform-browser';

describe('EniInputComponent', () => {
  let component: EniInputComponent;
  let fixture: ComponentFixture<EniInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniInputComponent ],
      imports: [BrowserModule,CommonModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
