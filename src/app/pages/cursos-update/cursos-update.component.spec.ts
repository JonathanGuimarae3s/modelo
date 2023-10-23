import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosUpdateComponent } from './cursos-update.component';

describe('CursosUpdateComponent', () => {
  let component: CursosUpdateComponent;
  let fixture: ComponentFixture<CursosUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosUpdateComponent]
    });
    fixture = TestBed.createComponent(CursosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
