import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EniTabsComponent } from './eni-tabs.component';
import { BrowserModule } from '@angular/platform-browser';

describe('EniTabsComponent', () => {
  let component: EniTabsComponent;
  let fixture: ComponentFixture<EniTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniTabsComponent ],
      imports: [BrowserModule, CommonModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
