import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniSelectcheckboxComponent } from './eni-selectcheckbox.component';

describe('EniSelectcheckboxComponent', () => {
  let component: EniSelectcheckboxComponent;
  let fixture: ComponentFixture<EniSelectcheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniSelectcheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniSelectcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
