import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteGenresComponent } from './favourite-genres.component';

describe('FavouriteGenresComponent', () => {
  let component: FavouriteGenresComponent;
  let fixture: ComponentFixture<FavouriteGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteGenresComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
