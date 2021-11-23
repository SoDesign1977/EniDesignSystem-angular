import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniButtonComponent } from './eni-button.component';

describe('EniButtonComponent', () => {
  let component: EniButtonComponent;
  let fixture: ComponentFixture<EniButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
