import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsCatalogComponent } from './authors-catalog.component';

describe('AuthorsCatalogComponent', () => {
  let component: AuthorsCatalogComponent;
  let fixture: ComponentFixture<AuthorsCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsCatalogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
