import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniModaleComponent } from './eni-modale.component';

describe('EniModaleComponent', () => {
  let component: EniModaleComponent;
  let fixture: ComponentFixture<EniModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniModaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
