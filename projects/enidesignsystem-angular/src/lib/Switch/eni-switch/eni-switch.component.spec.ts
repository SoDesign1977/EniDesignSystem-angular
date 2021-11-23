import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniSwitchComponent } from './eni-switch.component';

describe('EniSwitchComponent', () => {
  let component: EniSwitchComponent;
  let fixture: ComponentFixture<EniSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniSwitchComponent ]
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
