import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniSelectComponent } from './eni-select.component';

describe('EniSelectComponent', () => {
  let component: EniSelectComponent;
  let fixture: ComponentFixture<EniSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
