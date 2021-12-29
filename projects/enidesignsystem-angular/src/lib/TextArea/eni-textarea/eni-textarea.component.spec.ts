import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EniTextareaComponent } from './eni-textarea.component';
import { BrowserModule } from '@angular/platform-browser';

describe('EniTextareaComponent', () => {
  let component: EniTextareaComponent;
  let fixture: ComponentFixture<EniTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniTextareaComponent ],
      imports: [BrowserModule, CommonModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
