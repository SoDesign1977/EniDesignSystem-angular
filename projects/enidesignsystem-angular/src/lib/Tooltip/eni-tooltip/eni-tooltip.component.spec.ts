import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniTooltipComponent } from './eni-tooltip.component';

describe('EniTooltipComponent', () => {
  let component: EniTooltipComponent;
  let fixture: ComponentFixture<EniTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
