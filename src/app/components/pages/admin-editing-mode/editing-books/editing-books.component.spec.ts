import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingBooksComponent } from './editing-books.component';

describe('EditingBooksComponent', () => {
  let component: EditingBooksComponent;
  let fixture: ComponentFixture<EditingBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
