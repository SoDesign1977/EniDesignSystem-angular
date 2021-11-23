import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniTextareaComponent } from './eni-textarea.component';

describe('EniTextareaComponent', () => {
  let component: EniTextareaComponent;
  let fixture: ComponentFixture<EniTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
