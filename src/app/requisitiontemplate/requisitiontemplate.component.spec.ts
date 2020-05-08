import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitiontemplateComponent } from './requisitiontemplate.component';

describe('RequisitiontemplateComponent', () => {
  let component: RequisitiontemplateComponent;
  let fixture: ComponentFixture<RequisitiontemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisitiontemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisitiontemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
