import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EniSquarelistradioComponent } from './eni-squarelistradio.component';

describe('EniSquarelistradioComponent', () => {
  let component: EniSquarelistradioComponent;
  let fixture: ComponentFixture<EniSquarelistradioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniSquarelistradioComponent ],
      imports: [CommonModule,FormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniSquarelistradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
