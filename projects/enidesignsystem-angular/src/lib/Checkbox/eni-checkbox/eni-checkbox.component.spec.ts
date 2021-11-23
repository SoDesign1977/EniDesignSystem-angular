import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniCheckboxComponent } from './eni-checkbox.component';

describe('EniCheckboxComponent', () => {
  let component: EniCheckboxComponent;
  let fixture: ComponentFixture<EniCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
