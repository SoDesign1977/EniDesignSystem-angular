import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EniAlertComponent } from './eni-alert.component';
import { BrowserModule } from '@angular/platform-browser';

describe('EniAlertComponent', () => {
  let component: EniAlertComponent;
  let fixture: ComponentFixture<EniAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniAlertComponent ],
      imports: [BrowserModule,CommonModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
