import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionlistingComponent } from './requisitionlisting.component';

describe('RequisitionlistingComponent', () => {
  let component: RequisitionlistingComponent;
  let fixture: ComponentFixture<RequisitionlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitionlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitionlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
