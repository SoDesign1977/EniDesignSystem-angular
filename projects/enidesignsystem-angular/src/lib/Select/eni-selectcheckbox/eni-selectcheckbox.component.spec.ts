import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EniSelectcheckboxComponent } from './eni-selectcheckbox.component';
import { BrowserModule } from '@angular/platform-browser';

describe('EniSelectcheckboxComponent', () => {
  let component: EniSelectcheckboxComponent;
  let fixture: ComponentFixture<EniSelectcheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniSelectcheckboxComponent ],
      imports: [BrowserModule, CommonModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniSelectcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
