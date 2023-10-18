import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAddComponent } from './cursos-add.component';

describe('CursosAddComponent', () => {
  let component: CursosAddComponent;
  let fixture: ComponentFixture<CursosAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursosAddComponent]
    });
    fixture = TestBed.createComponent(CursosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
