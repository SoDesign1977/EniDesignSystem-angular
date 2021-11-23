import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnidesignsystemAngularComponent } from './enidesignsystem-angular.component';

describe('EnidesignsystemAngularComponent', () => {
  let component: EnidesignsystemAngularComponent;
  let fixture: ComponentFixture<EnidesignsystemAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnidesignsystemAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnidesignsystemAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
