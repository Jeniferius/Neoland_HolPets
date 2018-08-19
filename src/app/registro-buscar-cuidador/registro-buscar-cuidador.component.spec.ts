import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroBuscarCuidadorComponent } from './registro-buscar-cuidador.component';

describe('RegistroBuscarCuidadorComponent', () => {
  let component: RegistroBuscarCuidadorComponent;
  let fixture: ComponentFixture<RegistroBuscarCuidadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroBuscarCuidadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroBuscarCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
