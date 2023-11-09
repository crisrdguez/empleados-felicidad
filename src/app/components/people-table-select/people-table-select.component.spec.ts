import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleTableSelectComponent } from './people-table-select.component';

describe('PeopleTableSelectComponent', () => {
  let component: PeopleTableSelectComponent;
  let fixture: ComponentFixture<PeopleTableSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleTableSelectComponent]
    });
    fixture = TestBed.createComponent(PeopleTableSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
