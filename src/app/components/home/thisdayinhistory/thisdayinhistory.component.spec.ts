import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisdayinhistoryComponent } from './thisdayinhistory.component';

describe('ThisdayinhistoryComponent', () => {
  let component: ThisdayinhistoryComponent;
  let fixture: ComponentFixture<ThisdayinhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisdayinhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisdayinhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
