import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionlistdetailsComponent } from './requisitionlistdetails.component';

describe('RequisitionlistdetailsComponent', () => {
  let component: RequisitionlistdetailsComponent;
  let fixture: ComponentFixture<RequisitionlistdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitionlistdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitionlistdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
