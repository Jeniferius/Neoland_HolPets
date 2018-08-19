import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerCuidadorComponent } from './ser-cuidador.component';

describe('SerCuidadorComponent', () => {
  let component: SerCuidadorComponent;
  let fixture: ComponentFixture<SerCuidadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerCuidadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerCuidadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
