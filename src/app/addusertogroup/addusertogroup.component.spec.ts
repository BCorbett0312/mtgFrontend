import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddusertogroupComponent } from './addusertogroup.component';

describe('AddusertogroupComponent', () => {
  let component: AddusertogroupComponent;
  let fixture: ComponentFixture<AddusertogroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddusertogroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddusertogroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
