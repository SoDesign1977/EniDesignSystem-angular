import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EniTabsComponent } from './eni-tabs.component';

describe('EniTabsComponent', () => {
  let component: EniTabsComponent;
  let fixture: ComponentFixture<EniTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EniTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EniTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
