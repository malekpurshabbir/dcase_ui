import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkdoneComponent } from './workdone.component';

describe('WorkdoneComponent', () => {
  let component: WorkdoneComponent;
  let fixture: ComponentFixture<WorkdoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkdoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
