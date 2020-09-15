import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSearchDetailsComponent } from './view-search-details.component';

describe('ViewSearchDetailsComponent', () => {
  let component: ViewSearchDetailsComponent;
  let fixture: ComponentFixture<ViewSearchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSearchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
