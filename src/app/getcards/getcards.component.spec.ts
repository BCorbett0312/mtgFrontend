import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcardsComponent } from './getcards.component';

describe('GetcardsComponent', () => {
  let component: GetcardsComponent;
  let fixture: ComponentFixture<GetcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
