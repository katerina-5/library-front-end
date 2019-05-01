import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingAuthorsComponent } from './editing-authors.component';

describe('EditingAuthorsComponent', () => {
  let component: EditingAuthorsComponent;
  let fixture: ComponentFixture<EditingAuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingAuthorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
