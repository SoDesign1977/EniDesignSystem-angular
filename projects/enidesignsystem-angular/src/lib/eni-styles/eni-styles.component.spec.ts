import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniStylesComponent } from './eni-styles.component';

describe('EniStylesComponent', () => {
  let component: EniStylesComponent;
  let fixture: ComponentFixture<EniStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniStylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
