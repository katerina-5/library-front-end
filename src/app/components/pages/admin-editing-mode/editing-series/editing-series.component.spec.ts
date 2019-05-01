import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingSeriesComponent } from './editing-series.component';

describe('EditingSeriesComponent', () => {
  let component: EditingSeriesComponent;
  let fixture: ComponentFixture<EditingSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
