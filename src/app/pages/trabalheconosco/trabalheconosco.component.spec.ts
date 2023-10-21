import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalheconoscoComponent } from './trabalheconosco.component';

describe('TrabalheconoscoComponent', () => {
  let component: TrabalheconoscoComponent;
  let fixture: ComponentFixture<TrabalheconoscoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrabalheconoscoComponent]
    });
    fixture = TestBed.createComponent(TrabalheconoscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
