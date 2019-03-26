import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditingModeComponent } from './admin-editing-mode.component';

describe('AdminEditingModeComponent', () => {
  let component: AdminEditingModeComponent;
  let fixture: ComponentFixture<AdminEditingModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditingModeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditingModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
