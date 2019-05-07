import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteSeriesComponent } from './favourite-series.component';

describe('FavouriteSeriesComponent', () => {
  let component: FavouriteSeriesComponent;
  let fixture: ComponentFixture<FavouriteSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteSeriesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
