import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNewMediaComponent } from './search-new-media.component';

describe('SearchNewMediaComponent', () => {
  let component: SearchNewMediaComponent;
  let fixture: ComponentFixture<SearchNewMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNewMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNewMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
