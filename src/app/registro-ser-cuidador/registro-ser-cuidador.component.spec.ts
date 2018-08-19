import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroSerCuidadorComponent } from './registro-ser-cuidador.component';

describe('RegistroSerCuidadorComponent', () => {
  let component: RegistroSerCuidadorComponent;
  let fixture: ComponentFixture<RegistroSerCuidadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroSerCuidadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroSerCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
