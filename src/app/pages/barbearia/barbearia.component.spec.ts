import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbeariaComponent } from './barbearia.component';

describe('BarbeariaComponent', () => {
  let component: BarbeariaComponent;
  let fixture: ComponentFixture<BarbeariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarbeariaComponent]
    });
    fixture = TestBed.createComponent(BarbeariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
