import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScApiSubscribeComponent } from './sc-api-subscribe.component';

describe('ScApiSubscribeComponent', () => {
  let component: ScApiSubscribeComponent;
  let fixture: ComponentFixture<ScApiSubscribeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScApiSubscribeComponent]
    });
    fixture = TestBed.createComponent(ScApiSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
