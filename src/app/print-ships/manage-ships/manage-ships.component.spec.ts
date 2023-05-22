import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShipsComponent } from './manage-ships.component';

describe('ManageShipsComponent', () => {
  let component: ManageShipsComponent;
  let fixture: ComponentFixture<ManageShipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageShipsComponent]
    });
    fixture = TestBed.createComponent(ManageShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
