import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelezaFemininaComponent } from './beleza-feminina.component';

describe('BelezaFemininaComponent', () => {
  let component: BelezaFemininaComponent;
  let fixture: ComponentFixture<BelezaFemininaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BelezaFemininaComponent]
    });
    fixture = TestBed.createComponent(BelezaFemininaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
