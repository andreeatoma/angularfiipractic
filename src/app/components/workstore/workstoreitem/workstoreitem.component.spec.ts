import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstoreitemComponent } from './workstoreitem.component';

describe('WorkstoreitemComponent', () => {
  let component: WorkstoreitemComponent;
  let fixture: ComponentFixture<WorkstoreitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkstoreitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkstoreitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
