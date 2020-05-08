import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequisitionsdetComponent } from './newrequisitionsdet.component';

describe('NewRequisitionsdetComponent', () => {
  let component: NewRequisitionsdetComponent;
  let fixture: ComponentFixture<NewRequisitionsdetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRequisitionsdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRequisitionsdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
