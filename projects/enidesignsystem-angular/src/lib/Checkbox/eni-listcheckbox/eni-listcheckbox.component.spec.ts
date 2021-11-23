import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniListcheckboxComponent } from './eni-listcheckbox.component';

describe('EniListcheckboxComponent', () => {
  let component: EniListcheckboxComponent;
  let fixture: ComponentFixture<EniListcheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniListcheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniListcheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
