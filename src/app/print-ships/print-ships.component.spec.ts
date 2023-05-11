import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintShipsComponent } from './print-ships.component';

describe('PrintShipsComponent', () => {
  let component: PrintShipsComponent;
  let fixture: ComponentFixture<PrintShipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintShipsComponent]
    });
    fixture = TestBed.createComponent(PrintShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
