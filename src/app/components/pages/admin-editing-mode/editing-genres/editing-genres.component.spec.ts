import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingGenresComponent } from './editing-genres.component';

describe('EditingGenresComponent', () => {
  let component: EditingGenresComponent;
  let fixture: ComponentFixture<EditingGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
