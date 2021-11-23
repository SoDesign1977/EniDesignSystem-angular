import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniAlertComponent } from './eni-alert.component';

describe('EniAlertComponent', () => {
  let component: EniAlertComponent;
  let fixture: ComponentFixture<EniAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniAlertComponent ]
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
