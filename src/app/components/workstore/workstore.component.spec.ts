import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstoreComponent } from './workstore.component';

describe('WorkstoreComponent', () => {
  let component: WorkstoreComponent;
  let fixture: ComponentFixture<WorkstoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkstoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
