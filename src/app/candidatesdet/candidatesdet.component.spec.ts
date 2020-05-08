import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesdetComponent } from './candidatesdet.component';

describe('CandidatesdetComponent', () => {
  let component: CandidatesdetComponent;
  let fixture: ComponentFixture<CandidatesdetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatesdetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
