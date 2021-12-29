import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EniListcheckboxComponent } from './eni-listcheckbox.component';
import { BrowserModule } from '@angular/platform-browser';

describe('EniListcheckboxComponent', () => {
  let component: EniListcheckboxComponent;
  let fixture: ComponentFixture<EniListcheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniListcheckboxComponent ],
      imports: [BrowserModule,CommonModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniListcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
