import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EniSwitchComponent } from './eni-switch.component';
import { BrowserModule } from '@angular/platform-browser';

describe('EniSwitchComponent', () => {
  let component: EniSwitchComponent;
  let fixture: ComponentFixture<EniSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniSwitchComponent ],
      imports: [BrowserModule, CommonModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
