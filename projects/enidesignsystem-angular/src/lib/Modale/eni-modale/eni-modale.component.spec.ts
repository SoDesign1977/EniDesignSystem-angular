import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EniModaleComponent } from './eni-modale.component';
import { BrowserModule } from '@angular/platform-browser';

describe('EniModaleComponent', () => {
  let component: EniModaleComponent;
  let fixture: ComponentFixture<EniModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniModaleComponent ],
      imports: [BrowserModule,CommonModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
