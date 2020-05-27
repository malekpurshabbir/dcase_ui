import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheifcompComponent } from './cheifcomp.component';

describe('CheifcompComponent', () => {
  let component: CheifcompComponent;
  let fixture: ComponentFixture<CheifcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheifcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheifcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
